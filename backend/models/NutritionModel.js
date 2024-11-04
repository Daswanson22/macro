const db = require('../config/sql');

async function findPastDays(uid) {
    const sql = 'SELECT * FROM daily_nutrition WHERE uid = ?';
    const [rows] = await db.query(sql, [uid]);

    if(rows.length === 0) {
        return [];
    }

    return rows;
}

// Function to check if a daily entry exists
const checkDailyEntryExists = async (uid, date) => {
    const sql = 'SELECT * FROM daily_nutrition WHERE uid = ? AND logged_at = ?';
    const [results] = await db.query(sql, [uid, date]);
    return results; // Returns an array of existing entries
};

// Function to create a new daily entry
const createDailyEntry = async (uid, date) => {
    const sql = `
        INSERT INTO daily_nutrition (uid, logged_at)
        VALUES (?, ?)
    `;
    const result = await db.query(sql, [uid, date]);
    return result[0].insertId; // Return the ID of the new entry
};

// Function to add a meal entry
const addMealEntry = async (dailyNutritionId, mealTime, calories, carbs, protein, fats) => {
    const sql = `
        INSERT INTO meal_entries (daily_nutrition_id, meal_time, calories, carbs, protein, fats)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    await db.query(sql, [dailyNutritionId, mealTime, calories, carbs, protein, fats]);
};

// Function to update total nutrition values
const updateNutritionValues = async (uid, date, calories, carbs, protein, fats) => {
    const sql = `
        UPDATE daily_nutrition
        SET total_calories = total_calories + ?, 
            total_carbs = total_carbs + ?, 
            total_protein = total_protein + ?, 
            total_fats = total_fats + ?
        WHERE uid = ? AND logged_at = ?
    `;
    await db.query(sql, [calories, carbs, protein, fats, uid, date]);
};

// Function to get daily nutrition entry
const getDailyNutrition = async (uid, date) => {
    const sql = 'SELECT * FROM daily_nutrition WHERE uid = ? AND logged_at = ?';
    const [results] = await db.query(sql, [uid, date]);
    
    return results; // Returns an array of daily nutrition entries
};

module.exports = {
    findPastDays,
    checkDailyEntryExists,
    createDailyEntry,
    addMealEntry,
    updateNutritionValues,
    getDailyNutrition,
};