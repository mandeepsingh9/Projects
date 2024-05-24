const express=require("express");
const { LoginController, RegisterController, logutController } = require("../Controller/UserController");
const cookie=require("cookie-parser")
const route=express.Router();



route.post('/login',LoginController)
route.post('/register',RegisterController)
route.get("/logout",logutController)

module.exports=route;