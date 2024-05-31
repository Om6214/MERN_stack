require("dotenv").config()
const express = require("express");
const app = express();
const PORT = 3200 || process.env.PORT;
const connectDB = require('./utils/db')

const router = require('./router/auth-router')

// this is the middleware used to deal with the json files 
app.use(express.json())

// this is middleware where the the router will go at /auth/register at get the varous routes 
app.use('/',router);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at localhost:${PORT}`)
    })
})