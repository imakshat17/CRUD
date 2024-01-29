const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema({
    productId:{
        type:Number,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDiscription:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model("Task",taskSchema)