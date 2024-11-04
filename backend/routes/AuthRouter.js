'use strict'
const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/admin-login', authController.adminLogin);
router.post('/admin-register', authController.adminRegister);

module.exports = router;
