const UserModel = require('../models/UserModel');

// Function to get all users
const getAllUsers = async (req, res) => {    
    const users = await UserModel.getAllUsers();
    res.json(users);
};

// Function to get a user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.getUserById(id);
    res.json(user);
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    await UserModel.updateUser(id, name, email);
    res.send(`User with ID: ${id} updated.`);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserModel.deleteUser(id);
    res.send(`User with ID: ${id} deleted.`);
};

const changePassword = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    await UserModel.changePassword(id, password);
    res.send(`Password changed for user with ID: ${id}`);
}

const getDayHistory = async (req, res) => {
    const { uid } = req.query; // Get uid from the query parameter

    // Check if uid was provided
    if (!uid) {
        return res.status(400).json({ message: 'Missing uid query parameter' });
    }

    const result = await UserModel.getPastDays(uid);

    console.log("Results: ", result);
    res.json(result);
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    changePassword,
    getDayHistory,
};