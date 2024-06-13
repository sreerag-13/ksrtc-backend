const mongoose=require("mongoose")
let schema=mongoose.Schema(
    {

    "Name":{type:String,require:true},
    "Email":{type:String,require:true},
    "PhoneNo":{type:String,require:true},
    "Gender":{type:String,require:true},
    "Password":{type:String,require:true},
    "ConfirmPassword":{type:String,require:true}

}
)
let ksrtcmodel=mongoose.model("ksrtcs",schema)

module.exports={ksrtcmodel}