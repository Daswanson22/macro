const UserController = require('../controllers/UserController');
const express = require('express');

const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users/:id/password', UserController.changePassword);
router.get('/users/history', UserController.getDayHistory);

module.exports = router;