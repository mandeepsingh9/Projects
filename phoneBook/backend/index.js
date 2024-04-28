const express=require("express");
require("dotenv").config();
const connect=require('./db.js')
const app=express();
connect();
const port=process.env.PORT ||8000;
app.listen(port,()=>{
    console.log(`App is Listening ${port}`);
})