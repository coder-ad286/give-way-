const mongoose = require('mongoose');

const applicantSchema =new mongoose.Schema({
    name : {
        type : String,
        required:[true,"Please enter name "],
        trim:true
    },
    dob:{
        type : String,
        required:[true,"Please enter DOB"]
    },
    gender :{
        type : String,
        required :[true,"Please enter Number"]
    },
    email:{
        type:String,
        required:[true,"Please enter email"]
    },
    phoneno:{
        type:Number,
        required:[true,"Please Enter Phone Number"]
    },
    experience:{
        type:String,

    },
    skills : [
        {
            type:String
        }
    ],
    needs:{
        type:String,
        require:[true,"Please enter needs"]
    }
})

const applicantModel = mongoose.model("applicant",applicantSchema);

module.exports=applicantModel;

