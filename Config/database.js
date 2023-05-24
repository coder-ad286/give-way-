const mongoose = require('mongoose');

const connectDataBase = ()=>{
    mongoose.connect(process.env.DBURL,{
        useNewUrlParser:true,
        useUnifiedTopology : true
    }).then(()=>{
        console.log("Connected to Database")
    }).catch(()=>{
        console.log("Database Connection Failed")
    })
}

module.exports=connectDataBase;