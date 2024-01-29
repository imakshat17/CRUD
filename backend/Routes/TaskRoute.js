const {Router}=require("express")
const {getTasks,saveTask,updateTasks,deleteTasks} =require("../controllers/TaskController")
const router=Router()
router.get("/get",getTasks)
router.post("/save",saveTask)
router.put("/update/:id",updateTasks)
router.delete("/delete/:id",deleteTasks)
module.exports=router