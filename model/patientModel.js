const mongoose = require("mongoose")

const patientSchema =new mongoose.Schema(
    {
        patientName:String,
        PAdd:String,
        mobile:String,
        symptoms:String,
        status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)