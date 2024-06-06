
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
const contactValidate = (schema)=>(req,res,next)=>{
    try {
        const parseData = schema.parse(req.body)
        req.body=parseData
        next()
    } catch (err) {
        const message = "Fell the input properly";
        const status = 422;
        const extraDetail = err.error[0].message || "Invalid request data";
        const error = {
            status,
            message,
            extraDetail
        }   
        console.log(error)
        next(error);
    }
}

module.exports={signupvalidate,contactValidate}
