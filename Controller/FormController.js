const applicant = require('../Model/applicantsModel')
const admins = require('../Model/adminModel');


exports.getForm=(req,res,next)=>{
    res.render('registration')
}

exports.postData=async(req,res,next)=>{
    const body = req.body;
    
    const number = await applicant.findOne({phoneno:body.number})
    const email = await applicant.findOne({email:body.email})

      
    if(number===null && email===null){
        let skills = body.skills;
        skills = skills.split(";");
    
        const data={
            name:body.name,
            dob:body.dob,
            gender:body.gender,
            email:body.email,
            phoneno:body.number,
            experience: body.exp,
            skills :skills,
            needs:body.needs
        }
        
        let insertResult= await applicant.create(data);
    
        res.render("submit.hbs",{
            submited : true
        })
    }
    
     else{
        res.render("submit.hbs",{
            unsubmited: true
        })
     }
 
}

exports.LoginAdmin=(req,res,next)=>{
    if(req.query.status==303){
        res.render('AdminLogin',{
            status : req.query.status
        });
    }
    else{
        res.render('AdminLogin');
    }
}
exports.AdminDashboardPost=async(req,res,next)=>{
    const userData = req.body;

    const adminResult = await admins.findOne({username:userData.username});
    if(adminResult==null ){

        return res.redirect('/AdminLogin?status=303');  
    }
    else{

       if(adminResult.password!=userData.password){
        return res.redirect('/AdminLogin?status=303');  
       }

       else{
        const data = await applicant.find().lean()
       
        if(data.length!=0){
            res.render("AdminDashboard",{
                data:data,
                
            })
        }
        else{
            res.render("AdminDashboard",{
                status : 301,
            })
        }
       }
        

    }
    
}

exports.AdminDashboardGet=async(req,res,next)=>{
    const data = await applicant.find().lean();
    if(data.length!=0){
        res.render("AdminDashboard",{
            data:data,
           
        })
    }
    else{
        res.render("AdminDashboard",{
            status : 301,
        

        })
    }
    
}

exports.deleteData=async(req,res,next)=>{
    const deleteId = req.query.id;
    await applicant.findByIdAndDelete(deleteId);
    res.redirect('/AdminDashboard')
}

exports.displayInfo=async(req,res,next)=>{
    const viewId = req.query.id;
    const info = await applicant.findById(viewId).lean();
    res.render("AdminDashboard",{
        view : true,
        info : info
    })
}