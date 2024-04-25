const express=require("express");
const {getTodoController,createTodoController,updateTodoController,deleteTodoController}=require("../Controller/todoController.js")
const route=express.Router();

route.get("/todo",getTodoController)
route.post("/todo",createTodoController)
route.put("/todo/:id",updateTodoController)
route.delete("/todo/:id",deleteTodoController)
module.exports=route;
