const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const{kstrcmodels}=require("./models/ksrtc")
let app = express()
app.use(cors())
app.use(express.json())

app.post("/login", (req, res) => {
    res.json({ "status": "success" })
})

app.post("/signin", (req, res) => {
    res.json({ "status": "success sigin" })
})
app.get("/view", (req, res) => {
    res.json({ "status": "success view" })
})

app.listen("8081", () => {
    console.log("server start")
})