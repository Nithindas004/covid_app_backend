const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const patientRoute = require("./controller/patientRouter")
const app=express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nithindas1234:1234nith@cluster0.lvn9hia.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser: true})
app.use("/api/patient",patientRoute)

app.listen(3001,()=>{
    console.log("Server Running")
})