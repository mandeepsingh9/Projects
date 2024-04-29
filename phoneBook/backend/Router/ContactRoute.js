const express=require("express")
const {getAllphonebook,createPhonebook,updatePhonebook,deletePhonebook,getbyidphonebook}=require("../Controller/ContactController.js")
const Route=express.Router()

Route.get("/phonebook",getAllphonebook)
Route.post("/phonebook",createPhonebook)
Route.put("/phonebook/:id",updatePhonebook)
Route.delete("/phonebook/:id",deletePhonebook)
Route.get("/phonebook/view/:id",getbyidphonebook)

module.exports=Route