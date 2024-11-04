'use strict'
const databaseModel = require('../models/DatabaseModel');

// Handle table creation
// URL: http://localhost:3000/admin/createtable/:tablename
const createTable = async (req, res, next) => {
    try {
        const { tablename } = req.params;

        // Check if tablename is provided from URL 
        if(!tablename) {
            const error = new Error("Table name is required");
            error.status = 400;
            throw error;
        }

        const result = await databaseModel.createTable(tablename);

        if(!result) {
            const error = new Error("Table could not be created");
            error.status = 500;
            throw error;
        }

        console.log(`Table ${tablename} created...`);
        res.status(200).json({message: 'Table created'});
    } catch (error) {
        next(error);
    }
};

// Handle viewing users
// URL: http://localhost:3000/admin/viewTable/:tablename
const viewTable = async (req, res, next) => {
    try {
        const { tablename } = req.params;

        // Check if tablename is provided from URL
        if(!tablename) {
            const error = new Error("Table name is required");
            error.status = 400;
            throw error;
        }

        console.log(`Viewing ${tablename} table...`)

        // Get all users from the table
        const results = await databaseModel.getUsers(tablename);

        if(!results) {
            const error = new Error("Table not found");
            error.status = 500;
            throw error;
        }

        console.log("Results: ", results);

        res.status(200).json(results);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createTable,
    viewTable
};
