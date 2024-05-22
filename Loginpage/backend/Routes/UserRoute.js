const express=require("express");
const { LoginController, RegisterController } = require("../Controller/UserController");
const cookie=require("cookie-parser")
const route=express.Router();



route.post('/login',LoginController)
route.post('/register',RegisterController)


module.exports=route;