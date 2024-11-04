const db = require('../config/sql'); // Import the database module

// Function to add a user
const addUser = async (username, email, password) => {
    const sql = `
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
    `;
    try {
        const [result] = await db.query(sql, [username, email, password]);
        console.log("Results: ", result);

        return result;

    } catch (error) {
        console.error("Error: ", error);
        return 0;
    }
};

const addAdmin = async (username, email, password) => {
    const sql = `
    INSERT INTO admin (name, email, password)
    VALUES (?, ?, ?)
    `;
    try {
        const [result] = await db.query(sql, [username, email, password]);
        console.log("Results: ", result);
        return result;

    } catch (error) {
        console.error("Error: ", error);
        return 0;
    }
};

const getUserById = async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await db.query(sql, [id]);
    return rows[0];
}

// Function to get all users
const getAllUsers = async () => {
    const sql = 'SELECT * FROM users';
    const [rows] = await db.query(sql);
    return rows;
};

const updateUser = async (id, name, email) => {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    await db.query(sql, [name, email, id]);
}

const changePassword = async (id, password) => {
    const sql = 'UPDATE users SET password = ? WHERE id = ?';
    await db.query(sql, [password, id]);
}

const deleteUser = async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    await db.query(sql, [id]);
}

const findUserByEmail = async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    try {
        const [rows] = await db.query(sql, [email]);
        return rows[0];
    } catch(error) {
        console.error('Error finding user by email', error);
        throw error;
    }
}

const findAdminByEmail = async (email) => {
    const sql = 'SELECT * FROM admin WHERE email = ?';
    try {
        const [rows] = await db.query(sql, [email]);
        if(rows.length === 0) {
            return 0;
        }
        return rows[0];
    } catch(error) {
        console.error('Error finding user by email', error);
        return 0;
    }
}

const getPastDays = async (uid) => {
    const sql = `
        SELECT date, calories, carbs, protein, fats, created_at 
        FROM daily_nutrition
        WHERE uid = ?
        ORDER BY date DESC
    `;
    try {
        // Fetch the daily nutrition data for the user
        const [results] = await db.query(sql, [uid]);

        // If no records found, return a 404 status
        if (results.length === 0) {
            return res.status(404).json({ message: 'No nutrition data found for this user' });
        }

        // Return the data in JSON format
        res.json({
            user_uid: uid,
            nutrition_data: results
        });
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        res.status(500).json({ message: 'An error occurred while fetching nutrition data' });
    }
}

module.exports = {
    addAdmin,
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    changePassword,
    findUserByEmail,
    findAdminByEmail,
    getPastDays,
};
