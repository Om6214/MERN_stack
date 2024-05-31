
const validate = (schema) => (req, res, next) => {
    try {
        const parsedData = schema.parse(req.body);
        req.body = parsedData;
        next();
    } catch (err) {
        console.log(err);
        const message = err.errors[0].message || "Invalid request data";
        res.status(400).json({ msg: message });
    }
};

module.exports = validate;
