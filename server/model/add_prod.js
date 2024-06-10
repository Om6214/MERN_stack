const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    prodImg:{
        type:Array,
        require:true
    },
    prodName:{
        type:String,
        require:true
    },
    prodCategory:{
        type:String,
        require:true
    },
    prodStocks:{
        type:Number,
        require:true
    },
    prodPrice:{
        type:Number,
        require:true
    },
    discountPrice:{
        type:Number
    },
    Description:{
        type:String,
        require:true
    }
})

const Device = new mongoose.model("Device",productSchema);
module.exports=Device;