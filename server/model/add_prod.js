const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    prodImg:{
        type:String,
        require:true
    },
    prodName:{
        type:String,
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

const AddProd = new mongoose.model("AddProd",productSchema);
module.exports=AddProd;