'use strict'
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
// Routes endpoints
const userRoute = require('./routes/UserRouter');
const authRoute = require('./routes/AuthRouter');
const adminRoute = require('./routes/AdminRouter');
const nutritionRoute = require('./routes/NutritionRouter');
// Authenticates JSON Web tokens
const { authenticateToken } = require('./middlewares/AuthMiddleware');
const errorHandler = require('./middlewares/ErrorMiddleware');

// Initialize express
const app = express();

app.use(express.json());

// SQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TheBeach14$',
});

// Connect to the database
db.connect()

// Routes and business logic
// localhost:3000/auth/login
app.use("/auth/", authRoute);
app.use(authenticateToken);
app.use("/api/", userRoute);
app.use("/api/nutrition/", nutritionRoute);
app.use("/admin/", adminRoute);

// Use error handler at the root level of the applicaton.
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});