const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
let app=express()
app.use(cors())
app.use(express.json())

app.post("/login",(req,res)=>{
res.json({"status":"success"})
})

app.post("/login",(req,res)=>{
    res.json({"status":"success"})
    })
    app.post("/login",(req,res)=>{
res.json({"status":"success"})
})

app.listen("8081",()=>{
    console.log("server start")
})