const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username : {
        type:String,
        required:[true,"Please Enter Username"]
    },
    password : {
        type:String,
        required:[true,"Please Enter Password"]
    },
    name :{
        type:String,
        required:[true,"PLease enter Name"]
    }
});

const adminModel = mongoose.model('admin',adminSchema);

module.exports=adminModel;