const User=require("../Models/userModel.js");
const ErrorHandle=require("../Utils/ErrorHandle.js")
const Error=require("../Middleware/Error.js")
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
         
        if(response.password!=obj.password)
         {
            throw new ErrorHandle("Password do not Matched!","failed")
         } 
        console.log(response);
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
    let newdata= await User.create(data);
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