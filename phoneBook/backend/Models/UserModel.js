const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        unique:[true,"Name Aldready Exists"]
    },
    email:{
        type:String,
        required:[true,"email is Required"],
        
    },
    mobile:{
        type:Number,
        required:[true,"mobile no. is Required"],
        unique:[true,"mobile number Aldready Exists"]
    },
    altno:{
        type:Number,
        
    },
    group:{
        type: String,
        enum: {
          values: ['Family','Company','Friend','School','Other'],
          message: '{VALUE} is not supported'
        }
    },
    favorite: {
        type: Boolean,
        default: false 
    }
});

const Contact=mongoose.model("contact",contactSchema)
module.exports=Contact