const express=require("express")
const {getAllphonebook,createPhonebook,updatePhonebook,deletePhonebook}=require("../Controller/ContactController.js")
const Route=express.Router()

Route.get("/phonebook",getAllphonebook)
Route.post("/phonebook",createPhonebook)
Route.put("/phonebook/:id",updatePhonebook)
Route.delete("/phonebook/:id",deletePhonebook)

module.exports=Route