const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    Message:{
        type:String,
        require:true,
    }
})

const Contact = new mongoose.model("Contact",contactSchema)

module.exports= Contact;