const express = require('express');
const router = express.Router();
const databaseController = require('../controllers/DatabaseController');

// Define routes
router.get('/createtable/:tablename', databaseController.createTable);
router.get('/viewTable/:tablename', databaseController.viewTable);

module.exports = router;
