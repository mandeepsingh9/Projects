const Todo=require("../Model/todomodel.js")

const getTodoController=async (req,res)=>{
     
    try {
        const getAlldata=await Todo.find();
        console.log(getAlldata);
        res.json({
            "status":"201",
            "message":"sucess",
            "Data":getAlldata
        })
    } catch (error) {
        res.json({
            "status":"404",
            "message":"Some Thing Went Worng",
            "error":error
        })
    }
 
    
}


const createTodoController=async(req,res)=>{
    
    try {
        let data=req.body
        const createTodo=await Todo.create(data)
        console.log(createTodo);
        res.json({
            "status":"201",
            "message":"created Sucessfully"
        })
    } catch (error) {
        res.json({
            "status":"404",
            "message":"something Went Wrong",
            "error":error
        })
    }
   
}


const updateTodoController=async(req,res)=>{

    try {
        let id=req.params.id
        let obj=req.body
        let updateTodo= await Todo.findByIdAndUpdate(id,obj,{"new":"true"})
        console.log(updateTodo);
        res.json({
            "status":"201",
            "message":"Updated Sucessfully",
            
        })
    } catch (error) {
        res.json({
            "status":"404",
            "message":"something went Wrong",
            "error":error
            
        })
    }
  
}
const deleteTodoController=async(req,res)=>{

    try {
        let id=req.params.id
        
        let deleteTodo= await Todo.findByIdAndDelete(id,{"new":"true"})
        console.log(deleteTodo);
        res.json({
            "status":"201",
            "message":"Sucessfully Deleted",
            
        })
    } catch (error) {
        res.json({
            "status":"404",
            "message":"something went Wrong",
            "error":error
            
        })
    }
  
}
module.exports= {getTodoController,createTodoController,deleteTodoController,updateTodoController}