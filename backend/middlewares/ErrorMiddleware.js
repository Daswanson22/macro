// backend/middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    const statusCode = err.status || 500; // Default to 500 if no status is provided
    const message = err.message || 'Internal Server Error'; // Default message

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

module.exports = errorHandler;