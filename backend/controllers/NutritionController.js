const nutritionModel = require('../models/NutritionModel');

async function getAllNutrition(req, res, next) {
    try {
        const { uid } = req.query;

        if(!uid) {
            const error = new Error("Missing uid query parameter");
            error.status = 400;
            throw error;
        }

        const nutrition = await nutritionModel.findPastDays(uid);

        if(!nutrition) {
            const error = new Error("Could not retrieve past days nutrition. Try again.");
            error.status = 404;
            throw error;
        }

        res.status(200).json(nutrition);
    } catch (error) {
        next(error);
    }
}

// Controller function to add meal data
const addMealData = async (req, res, next) => {
    const { uid, date, meal_time, calories, carbs, protein, fats } = req.body;

    // Validate input
    if (!uid || !date || !meal_time || !calories || !carbs || !protein || !fats) {
        return res.status(400).json({
            status: 'error',
            message: 'UID, date, meal time, and meal data are required'
        });
    }

    try {
        // Check if daily entry exists
        const existingEntries = await nutritionModel.checkDailyEntryExists(uid, date);

        // Create a new daily entry if it doesn't exist
        const dailyNutritionId = existingEntries.length === 0 
            ? await nutritionModel.createDailyEntry(uid, date) 
            : existingEntries[0].entry_id; // Use existing entry ID

        // Add the meal entry
        await nutritionModel.addMealEntry(dailyNutritionId, meal_time, calories, carbs, protein, fats);

        // Update the total nutrition values for the day
        await nutritionModel.updateNutritionValues(uid, date, calories, carbs, protein, fats);

        res.status(200).json({
            status: 'success',
            message: 'Meal data added successfully',
        });
    } catch (error) {
        // Pass the error to the error handler middleware
        next(error);
    }
};

// Controller function to get daily nutrition data
const getDailyNutrition = async (req, res, next) => {
    const { uid, date } = req.query;

    try {
        const dailyNutrition = await nutritionModel.getDailyNutrition(uid, date);
        if (dailyNutrition.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'No nutrition data found for the specified date',
            });
        }
        
        res.status(200).json({
            status: 'success',
            data: dailyNutrition,
        });
    } catch (error) {
        // Pass the error to the error handler middleware
        next(error);
    }
};

module.exports = {
    addMealData,
    getDailyNutrition,
    getAllNutrition,
};
