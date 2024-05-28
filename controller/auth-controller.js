

const home = async(req,res)=>{
    try {
        res
            .status(200)
            .send("welcome to home from controller")
    } catch (error) {
        console.log(error)
    }
}

const register =(req,res)=>{
    try {
        console.log(req.body)
        res.status(200).json({message : req.body})
    } catch (error) {
        console.log(error)
    }
}

module.exports={home,register};

