const express=require("express");
require("dotenv").config();
const connect=require('./db.js')
const Route=require("./Router/ContactRoute.js");
const favoriteRoute = require("./Router/FavouriteRoute.js");

const app=express();
connect();

app.use(express.json())
app.use('/api',Route)
app.use('/',favoriteRoute)

const port=process.env.PORT ||8000;
app.listen(port,()=>{
    console.log(`App is Listening ${port}`);
})