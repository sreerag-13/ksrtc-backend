const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const { ksrtcmodel } = require("./models/ksrtc")
let app=express()
app.use(cors())
app.use(express.json())

app.post("/login",(req,res)=>{
let input=req.body
let ksrtc=new ksrtcmodel(input)
console.log(ksrtc)
ksrtc.save()
res.json({"status":"success"})
})

app.post("/sign",(req,res)=>{
    let input=req.body
    let ksrtc=new ksrtcmodel(input)
    console.log(ksrtc)
    ksrtc.save()
    res.json({"status":"success"})
    })


app.listen("8081",()=>{
    console.log("server start")
})