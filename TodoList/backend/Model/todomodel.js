
const mongoose=require("mongoose");


const todoSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:[true,"userid is Required"],
        unique: [true, "User ID already exists"]
    },
    item:{
        type:String,
        required:[true,"Item must be required"]
    },
    iscomplete:{
        type:String,
    
    }
})

const Todo=mongoose.model("todo",todoSchema)

module.exports=Todo;