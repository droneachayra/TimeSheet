//console.log("hello mongodb");
const express=require('express');
const app=express();
const port=process.env.port || 8080 //this is used for server port z
const authRoute=require('./routes/auth_route');
const file = require('./routes/file')
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const mongouri = 'mongodb+srv://time1:time1@cluster0.8qkzhs0.mongodb.net/db?retryWrites=true&w=majority';

require("dotenv").config();

mongoose.connect(mongouri,{useUnifiedTopology:true})
const db=mongoose.connection
db.on('error',(err)=>{

    console.log(err)
})
db.once('open',()=>{
    console.log("Databse Connection Established!...")
})

let bucket;
db.on("connected", () => {
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket"
  });
});

const storage = new GridFsStorage({
    url: mongouri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "newBucket"
        };
        resolve(fileInfo);
      });
    }
  });

mongoose.set('strictQuery', true);
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(cors());
app.use(bodyParser.json());
app.use('/auth',authRoute);
// app.use('/file', file);
app.get('/',(req,res) => {
    res.send('Welcome to Timesheet .... ')
})
app.listen(port,()=>{
console.log("Node server is connected..",port)
})