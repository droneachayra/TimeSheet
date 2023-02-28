//console.log("hello mongodb");
const express=require('express');

const app=express();

const port=process.env.port || 8080 //this is used for server port z

 //const authRoute=require('./routes/auth_route');

 const mongoose=require('mongoose');

// const bodyParser = require('body-parser');
// const cors=require('cors');
 //mongoose.connect('mongodb://127.0.0.1:27017/timesheet',(err)=>{
   // if(err){
     //  console.log("Database is not connected");  
     // }else{
     //    console.log("databse is connected...")
   // }
 //}); 
// mongoose.set('strictQuery', true);
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json());
// app.use(cors())
//app.use('/auth',authRoute);


 app.get('/',(req,res) => {
     res.send('welcome to Gis Server.... ');
 })
app.listen(port,()=>{
console.log("Node server is connected..",port);
})