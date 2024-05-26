const express=require("express");
const { LoginController, RegisterController, logutController } = require("../Controller/UserController");
const cookie=require("cookie-parser");
const { updateController, DeleteController } = require("../Controller/profileController");
const route=express.Router();



route.post('/login',LoginController)
route.post('/register',RegisterController)
route.get("/logout",logutController)
route.post("/update",updateController)
route.get("/delete",DeleteController)
module.exports=route;