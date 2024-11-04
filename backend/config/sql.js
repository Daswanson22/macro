const mysql = require('mysql2');

// Create a connection pool for better performance and management
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'TheBeach14$',
    database: 'DB_VIEWER' // Set the database here
});

const promisePool = pool.promise(); // Promisify the pool for async/await support

module.exports = promisePool;