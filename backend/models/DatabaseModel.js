const db = require('../config/sql');

// Create table if it does not exist
const createTable = async (tablename, sql) => {
    await db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return 0;
        };
        console.log("Results: ", results);
        return results;
    });
};

// Get all users
const getUsers = async (tablename) => {
    const sql = `SELECT * FROM ${tablename}`;
    console.log("SQL: ", sql);
    const [results] = await db.query(sql);
    return results;
};

module.exports = {
    createTable,
    getUsers
};
