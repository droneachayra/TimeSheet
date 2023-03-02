//console.log("hello mongodb");
const express=require('express');
const app=express();
const port=process.env.port || 8080 //this is used for server port z
const authRoute=require('./routes/auth_route');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
mongoose.connect('mongodb+srv://time1:time1@cluster0.8qkzhs0.mongodb.net/db?retryWrites=true&w=majority',{useUnifiedTopology:true})
const db=mongoose.connection
db.on('error',(err)=>{

    console.log(err)
})
db.once('open',()=>{
    console.log("Databse Connection Established!...")
})

mongoose.set('strictQuery', true);
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(cors());
app.use(bodyParser.json());
app.use('/auth',authRoute);
app.get('/',(req,res) => {
    res.send('Welcome to Timesheet .... ')
})
app.listen(port,()=>{
console.log("Node server is connected..",port)
})