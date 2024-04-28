const Contact = require("../Models/UserModel");

const  getAllphonebook =async(req,res)=>{

     try {
         const getAlldata= await Contact.find();
         res.json({
            "status":"201",
            "message":"sucess",
            "Data":getAlldata
         });        
     } catch (error) {
        res.json(
         {
            "status":"404",
            "message":"Something went wrong",
            "error":error
         }
        )
     }
    
}

const createPhonebook=async(req,res)=>{
   
   try {
    const data= req.body;
    const createddata= await Contact.create(data);
    res.json({
       "status":"201",
       "message":"sucessfully Created",
       "Data":createddata    });        
} catch (error) {
   res.json(
    {
       "status":"404",
       "message":"Something went wrong",
       "error":error
    }
   )
}
  
}

const updatePhonebook=async(req,res)=>{
    try {
        const data= req.body;
        const id=req.params.id;
        console.log(data,id);
        const updatedata=await Contact.findByIdAndUpdate(id,data,{new:true})
        res.json({
            "status":"201",
            "message":"sucessfully updated",
            "Data":updatedata   });  
    
    } catch (error) {
        res.json(
            {
               "status":"404",
               "message":"Something went wrong",
               "error":error
            }
           )
        
    }
 }
 

const deletePhonebook=async(req,res)=>{
    
   try {
     const id=req.params.id;
     console.log(id);
     const deletedData= await Contact.findByIdAndDelete(id,{new:true})
     console.log(deletedData);
     res.json({
        "status":"201",
        "message":"Delete sucessfully ",
        "Data":deletedData   });   
  
    }
     catch (error) {
    res.json(
        {
           "status":"404",
           "message":"Something went wrong",
           "error":error
        }
       )
   }
 }
 



module.exports={getAllphonebook,createPhonebook,updatePhonebook,deletePhonebook}