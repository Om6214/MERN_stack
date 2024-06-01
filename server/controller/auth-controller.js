const User = require("../model/user_model")
const Contact = require("../model/contact_model")
const bcrypt = require("bcrypt")
const home = async(req,res)=>{
    try {
        res
            .status(200)
            .send("welcome to home from controller")
    } catch (error) {
        console.log(error)
    }
}

const register = async(req,res)=>{
    try {
        const {Name,Email,Phone_number,Password}=req.body
        const userExist= await User.findOne({Email})
        if(userExist){
            res.status(400).json({"message":"User already exist"})
        }


        const user = await User.create({Name,Email,Phone_number,Password})
        res.status(200).json({
            "msg":"Registration successfull",
            "token": await user.generateToken(),
            "userID": user._id.toString()
        })
    } catch (error) {
        res.status(400).json({"message":`${error}`})
    }   
}

// login logic

const login = async(req,res) =>{
    try {
        const {Email,Password} = req.body
        const userExist = await User.findOne({Email})
        if(!userExist){
            res.status(400).json({"msg":"Invalid Credentials"})
        }
        const user = await bcrypt.compare(Password,userExist.Password)
        if(user){
            res.status(200).json({
                "msg":"Login successfull",
                "token": await userExist.generateToken(),
                "userID": userExist._id.toString()
            })
            
        }
    } catch (error) {
        console.log("error is",error)
    }
}

// logic for contact page

const service = async(req,res)=>{
    try {
        const{Name,Email,Message}=req.body;
        await Contact.create({Name,Email,Message})
        res.status(200).json({"message":"contact form submitted"})
    } catch (error) {
        res.status(400).json({"msg":`${error}`})
    }
}

module.exports={home,register,login,service};

