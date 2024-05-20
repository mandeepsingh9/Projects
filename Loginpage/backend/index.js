const express=require('express')
require("dotenv").config();
const connect =require("./db.js");
const userRoute=require('./Routes/UserRoute.js')
const app=express();

connect();



//middleware
app.use(express.json());
app.use("/api",userRoute)
const port=process.env.PORT || 8000;

 app.listen(port,()=>{
     console.log(`App is listening on Port ${port}`);
 })