const router = require("express").Router();
const projectComponent=require('../models/project-component');
const User = require('../models/user');
const Activity = require('../models/activity');
const Employee = require('../models/employee');
const Project = require('../models/project');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const checkAuth =require('../middleware/check_auth');


router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.json({ success: false, message: "Hash Error !" })
        } else {
            //res.json("register work")
            const user = new User({
                displayName: req.body.displayName,
                email: req.body.email,
                password :hash,
            }).save()
            .then((_) => {
                res.json({ success: true, message: "Account has been created" })
            })
            .catch((err) => {
                if (err.code === 11000) {
                    return res.json({ uccses: false, message: "Email already exists! " })
                }
                res.json({ success: false, message: "Authentication failed" })
            })
        }
    })

});

router.post('/login', (req, res) => {
   // res.json("login work")
   User.find({email:req.body.email}).exec().then((result)=>{
    if(result.length<1){
        return res.json({success:false,message:"user not fount"})
    }
    const user=result[0];
    bcrypt.compare(req.body.password,user.password,(err,ret)=>{
        if(ret){
            const payload={
                userId:user._id
            } 
           const token = jwt.sign(payload,"webBatch")
            return res.json({success:true,message:"Login Succfull...!!",token:token})
        }else{
            return res.json({success:false,message:"password does not match!!"})
        }
    })
   }).catch(err=>{
    res.json({success:false,message:"Authentication failed.."})
   })
})

router.get('/logout',checkAuth,(req, res) =>{
    //const userId="63e21378ccb8d70af4fba0f8";
    const userId=req.userData.userId;
        User.findById(userId).exec().then((result)=>{
            res.json({success:true,data:result})

        }).catch(err=>{
            res.json({success:false,message:"Server error"})
        })
    
})

router.post('/activity', (req, res) => {
    const act = new Activity({
        id: req.body.id,
        name: req.body.name,
        code :req.body.code,
    }).save()
    .then((_) => {
        res.json({ success: true, message: "Activity added successfully" })
    })
    .catch((err) => {
        if (err.code === 11000) {
            return res.json({ success: false, message: "Activity already present" })
        }
        res.json({ success: false, message: "Failed to add" })
    })
});

router.post('/employee', (req, res) => {
    const emp = new Employee({
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email :req.body.email,
        password:req.body.password
    }).save()
    .then((_) => {
        res.json({ success: true, message: "Employee added successfully" })
    })
    .catch((err) => {
        if (err.code === 11000) {
            return res.json({ success: false, message: "Employee already present" })
        }
        res.json({ success: false, message: err })
    })
});

router.post('/project', (req, res) => {
    const pro = new Project({
        id: req.body.id,
        procode: req.body.procode,
        name: req.body.name,
        status: req.body.status,
        starttime: req.body.starttime,
        endtime: req.body.endtime
    }).save()
    .then((_) => {
        res.json({ success: true, message: "Project added successfully" })
    })
    .catch((err) => {
      console.log(err);
        if (err.code === 11000) {
            return res.json({ success: false, message: "Project already present" })
        }
        res.json({ success: false, message: err })
    })
});

router.route('/getEmployee').get((req, res) => {
    Employee.find().then((result) => {
        res.json(result);
    })
})

router.route('/getActivity').get((req, res) => {
    Activity.find().then((result) => {
        res.json(result);
    })
})

router.route('/getProject').get((req, res) => {
    Project.find().then((result) => {
        res.json(result);
    })
})




  
// router.route('/deleteActivity/:id').delete((req, res, next) => {
//     Activity.findOneAndRemove(req.params.id).then((error, data) => {
//       if (error) {
//         return next(error);
//       }else {
//         res.status(200).json({
//           msg: data
//         })
//       }
//     })
    
// })
router.route('/deleteActivity/:id').delete((req, res, next) => {
    Activity.findOneAndRemove({id: req.params.id}).then((data, error) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: 'Activity deleted successfully',
          data: data
        });
      }
    });
  });
  router.route('/deleteEmployee/:id').delete((req, res, next) => {
    Activity.findOneAndRemove({id: req.params.id}).then((data, error) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: 'Employee deleted successfully',
          data: data
        });
      }
    });
  });
  router.route('/deleteProject/:id').delete((req, res, next) => {
    Activity.findOneAndRemove({id: req.params.id}).then((data, error) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: 'Project deleted successfully',
          data: data
        });
      }
    });
  });


 
router.route('/editactivity/:id').put((req, res) => {
    Activity.findOneAndUpdate(
      { id: req.params.id },
      { $set: { name: req.body.name, code: req.body.code } },
      { new: true }
    ).then((result) => {
      res.json({ success: true, message: "Activity updated successfully", data: result });
    }).catch((err) => {
      res.json({ success: false, message: "Failed to update", error: err });
    });
  });
  
  router.route('/editemployee/:id').put((req, res) => {
    Employee.findOneAndUpdate(
      { id: req.params.id },
      { $set: { firstname: req.body.firstname, lastname: req.body.lastname } },
      { new: true }
    ).then((result) => {
      res.json({ success: true, message: "Employee updated successfully", data: result });
    }).catch((err) => {
      res.json({ success: false, message: "Failed to update", error: err });
    });
  });

  router.route('/editproject/:id').put((req, res) => {
   
    Project.findOneAndUpdate(
      { id: req.params.id },
      { $set: { name: req.body.name, status: req.body.status, starttime:req.body.starttime, endtime:req.body.endtime } },
      { new: true }
    ).then((result) => {
      res.json({ success: true, message: "Project updated successfully", data: result });
    }).catch((err) => {
      res.json({ success: false, message: "Failed to update", error: err });
    });
  });
  router.post('/projectComponent', (req, res) => {
    
    const pro = new projectComponent({
        taskName: req.body.taskName,
        employeelist: req.body.employeelist,
        filename: req.body.filename,
        activity:req.body.activity,
      

    }).save()
    .then((_) => {
        res.json({ success: true, message: "Project added successfully" })
    })
    .catch((err) => {
      console.log(err);
        if (err.code === 11000) {
            return res.json({ success: false, message: "Project already present" })
        }
        res.json({ success: false, message: err })
    })
});

router.route('/getProjectComponent').get((req, res) => {
  projectComponent.find().then((result) => {
      res.json(result);
  })
})


module.exports = router









