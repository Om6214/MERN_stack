const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

const router = require('./router/auth-router')

app.use('/auth/register',router);

app.get('/',(req,res)=>{
    res.status(200).send("hello Omnath");
})
app.get('/register',(req,res)=>{
    res.status(200).send("register page");
})

app.listen( PORT ,()=>{
    console.log(`server is running at port ${PORT}`);
})