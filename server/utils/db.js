const mongoose = require("mongoose")

const uri = process.env.MONGODB_URI  

const connectDB = async()=>{
    try {
        await mongoose.connect(uri)
        console.log("connection to MongoDB successfull")
    } catch (error) {
        console.log(error)
    }
}


module.exports=connectDB
