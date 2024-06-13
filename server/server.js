require("dotenv").config()
const express = require("express");
const app = express();
const error_middleware = require('./middleware/error-middleware')
const PORT = 3000 || process.env.PORT;
const connectDB = require('./utils/db')
const cors = require("cors")
const serviceRouter = require('./router/service-router')

const router = require('./router/auth-router')
const admin_router = require("./router/admin-router")


// handling the cors error

const corsOptions = {
    origin:'https://ecom-7y5gh0gc6-om6214s-projects.vercel.app',
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
}

app.use(cors(corsOptions)); 

// this is the middleware used to deal with the json files 
app.use(express.json())
app.use('/admin',admin_router)

// this is middleware where the the router will go at / at get the varous routes 
app.use('/',router);

app.use('/',serviceRouter)

// this is the error handle middleware and it should be put only at the last of the Middlewares
app.use(error_middleware)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at localhost:${PORT}`)
    })
})