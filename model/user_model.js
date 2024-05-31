const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    Phone_number:{
        type:Number,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    isAdmin : {
        type:Boolean,
        default:false
    }
})

userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("Password")){
        next();
    }
    try {
        const saltRounds = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.Password,saltRounds)
        user.Password=hash_password
        next()
    } catch (error) {
        next(error)
    }
})
// comparing the password

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.Password)
}


// json web token
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userid: this._id.toString(),
            Email : this.Email,
            isAdmin : this.isAdmin
        },
        process.env.secretKey,
        {
            expiresIn:"30d"
        }
    )
    } catch (error) {
        console.log(error)
    }
}

const User = new mongoose.model("User",userSchema);

module.exports=User;