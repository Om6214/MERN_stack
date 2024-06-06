const error_middleware = (err, req, res, next) => {
    const status = err.status || 400;
    const message = err.message || "fill the details properly";

    // Ensure to send the response with status and message in a consistent format
    return res.status(status).json({ message});
};

module.exports = error_middleware;
