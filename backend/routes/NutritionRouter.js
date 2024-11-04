const express = require('express');
const NutritionController = require('../controllers/NutritionController');

const router = express.Router();

router.post('/add-meal', NutritionController.addMealData);
router.get('/get-daily', NutritionController.getDailyNutrition);

module.exports = router;