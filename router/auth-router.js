const express = require("express")

const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).send("hello Omnath from router")
})

router.route("/further").get((req,res)=>{
    res.status(200).send("hello Omnath from router for further")
})

module.exports=router;