const TaskModel=require("../Models/TaskModel")
module.exports.getTasks=async(req,res)=>{
     const task=await TaskModel.find()
     res.send(task)
    
}
module.exports.saveTask = (req, res) => {
    const { productId, productName, productPrice, productDiscription } = req.body;

    TaskModel.create({
        productId,
        productName,
        productPrice,
        productDiscription
    })
        .then((data) => {
            console.log("Saved Successfully");
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send({ err: err, msg: "Something went wrong" });
        });
};

module.exports.updateTasks=(req,res)=>{
    const{id}=req.params
    const { productId, productName, productPrice, productDiscription } = req.body;

    TaskModel.findByIdAndUpdate(id, {
        productId,
        productName,
        productPrice,
        productDiscription
    })
 .then(()=>res.send("Updated Successfully"))
 .catch((err)=>{
     res.send({err:err,msg:"Something went wrong"})
 })    
 }
 module.exports.deleteTasks=(req,res)=>{
    const{id}=req.params
 TaskModel.findByIdAndDelete(id)
 .then(()=>res.send("Deleted Successfully"))
 .catch((err)=>{
     res.send({err:err,msg:"Something went wrong"})
 })    
 }
 
