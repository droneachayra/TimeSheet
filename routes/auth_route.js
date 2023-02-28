const router = require("express").Router();

const User = require('../models/user');
//const bcrypt = require('bcrypt');
//const jwt =require('jsonwebtoken');
//const checkAuth =require('../middleware/check_auth');

 router.post('/register', (req, res) => {
   // res.json("register" );
    const user = new User({
                       // displayName:{type:String},
                       // email:{type:String,unique:true},
                        // password:{type:String,required:true},
                        displayName: req.body.displayName,
                         email: req.body.email,
                        //password :hash,
                        password: req.body.password,
        
                        // displayName:"sonal patil",
                        // email:"sonal@droneacharya.com",
                        // password:"1234567",
                    })
                    user.save()
                                    .then((_) => {
                                       res.json({ success: true, message: "Account has been created" })
                                    })
                                    .catch((err) => {
                                                          // if (err.code === 11000) {
                                                           //  return res.json({ uccses: false, message: "Email is Already exist ! " })
                                                          //  }
                                                            res.json({ succses: false, message: "Authentication failed" })
                                                     })
});

router.post('/login', (req, res) => {
    res.json( "login" );
});

//router.post('/register', (req, res) => {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         if (err) {
//             return res.json({ succses: false, message: "Hash Error !" })
//         } else {
            
//             //res.json("register work")
//             const user = new User({
//                 //displayName:{type:String},
//                 //email:{type:String,unique:true},
//                 // password:{type:String,required:true},
//                 displayName: req.body.displayName,
//                 email: req.body.email,
//                 password :hash,
//                // password: req.body.password,

//                 // displayName:"sonal patil",
//                 // email:"sonal@droneacharya.com",
//                 // password:"1234567",
//             }).save()
//                 .then((_) => {
//                     res.json({ succses: true, message: "Account has been created" })
//                 })
//                 .catch((err) => {
//                     if (err.code === 11000) {
//                         return res.json({ uccses: false, message: "Email is Already exist ! " })
//                     }
//                     res.json({ succses: false, message: "Authentication failed" })
//                 })
//         }
//     })

// });
// router.post('/login', (req, res) => {
//    // res.json("login work")
//    User.find({email:req.body.email}).exec().then((result)=>{
//     if(result.length<1){
//         return res.json({succses:false,message:"user not fount"})
//     }
//     const user=result[0];
//     bcrypt.compare(req.body.password,user.password,(err,ret)=>{
//         if(ret){
//             const payload={
//                 userId:user._id
//             } 
//            const token = jwt.sign(payload,"webBatch")
//             return res.json({succses:true,message:"Login Succful!!",token:token})
//         }else{
//             return res.json({succses:false,message:"password does not match!!"})
//         }
//     })
//    }).catch(err=>{
//     res.json({succses:false,message:"Authentication failed.."})
//    })
// })

// router.get('/profile',checkAuth,(req, res) =>{
//     //const userId="63e21378ccb8d70af4fba0f8";
//     const userId=req.userData.userId;
//         User.findById(userId).exec().then((result)=>{
//             res.json({succses:true,data:result})

//         }).catch(err=>{
//             res.json({succses:false,message:"Server error"})
//         })
    
// })
module.exports = router