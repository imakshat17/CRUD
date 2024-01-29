const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config()
const routes=require("./Routes/TaskRoute")
const cors=require("cors")

const app=express()
const PORT=process.env.PORT || 5000
app.use(express.json())

app.use(cors())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Monogodb Connected...")
}).catch(err=>console.log(err))
app.get("/",(req,res)=>{
    res.send("hiii")
})
app.use("/api",routes)
app.listen(PORT,()=>{
     console.log(`Listening at ${PORT}`)
})