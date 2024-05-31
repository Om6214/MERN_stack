
const signupvalidate = (schema) => (req, res, next) => {
    try {
        const parsedData = schema.parse(req.body);
        req.body = parsedData;
        next();
    } catch (err) {
        const message = err.errors[0].message || "Invalid request data";
        const status = 422;
        const error = {
            status,
            message
        }
        console.log(error)
        next(error);
    }
};

const loginValidate = (schema)=>(req,res,next)=>{
    try {
        const parsedData = schema.parse(req.body)
        req.body = parsedData;
        next()
    } catch (err) {
        const message = err.errors[0].message || "Invalid request data";
        const status = 422;
        const error = {
            status,
            message
        }
        console.log(error)
        next(error);
    }
}

module.exports={signupvalidate,loginValidate}
