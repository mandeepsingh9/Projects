const express=require("express");
require('dotenv').config();
const connect=require("./db.js")
const cors=require("cors")
const route=require("./Router/Todoroute.js")
const app=express();

connect();
app.use(cors())
app.use(express.json())

app.use("/api",route)
const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`App is listening on ${port}`);
})

