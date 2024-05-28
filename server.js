const express = require("express");
const app = express();
const PORT = 3200 || process.env.PORT;

const router = require('./router/auth-router')

app.use(express.json())

// this is middleware where the the router will go at /auth/register at get the varous routes 
app.use('/',router);


app.listen( PORT ,()=>{
    console.log(`server is running at port ${PORT}`);
})