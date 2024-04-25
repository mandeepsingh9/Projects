const  mongoose  = require("mongoose");
require("dotenv").config();
const connect=async()=>{
   
  try {
    await mongoose.connect(`mongodb+srv://nishagupta14:${process.env.dbPassword}@cluster0.jm67guo.mongodb.net/Todo`)
    console.log("mongodb connected");
}
   catch (error) {
       console.log("mongoDb Connection failed");
  }
}
module.exports=connect;