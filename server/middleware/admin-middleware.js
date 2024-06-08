

const adminMiddleware = async(req,res,next)=>{
    try {
        const isAdmin = req.user.isAdmin
        if(!isAdmin){
            return res.status(404).json({"message":"Access denied ! u are not an admin"})
        }
        next();

    } catch (error) {
        console.log(error)
    }
}
module.exports = adminMiddleware