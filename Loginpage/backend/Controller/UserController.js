const User=require("../Models/userModel.js");
const ErrorHandle=require("../Utils/ErrorHandle.js")
require("dotenv").config()
const Error=require("../Middleware/Error.js")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const cookie=require("cookie-parser")
const LoginController=async(req,res)=>
{
   try {
        let obj=req.body;
         console.log(obj);
        let response=await User.findOne({username:obj.username})
        if(!response)
         {
            throw new ErrorHandle("User not Exits","failed")
         }
         
         const ischeckPass= await bcrypt.compare(obj.password,response.password)
        console.log(ischeckPass);
        if(!ischeckPass)
         {
            throw new ErrorHandle("Password do not Matched!","failed")
         } 
        console.log(response);

        //jwt token generate
        
         let token=jwt.sign({"UserId":response._id}, process.env.jwt_password , {expiresIn: '1h'})
         res.cookie("token",token,{httpOnly:true,maxAge:60*60*24*10});

      
        //................



       res.json({
         "status":"sucess",
         "message":"Login Sucessfull",
         "Data":response
       });
   } catch (error) {
       res.json({"status":error.status,
         "message":error.message
       })
   }    

}


const RegisterController=async(req,res)=>
{
   
   try {
    let data=req.body;

      let encrypt=await bcrypt.hash(data.password,10)
      
      let obj={
         "username":data.username,
         "email":data.email,
         "password":encrypt
      }
    let newdata= await User.create(obj);
    res.json({
        "status":"sucess",
        "message":"Register Sucessfully",
        "Data":newdata
    });
   } catch (error) {
     Error(error,req,res);
   }
   
}

module.exports={LoginController,RegisterController}