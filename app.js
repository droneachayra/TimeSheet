//console.log("hello mongodb");
// const express=require('express');

// const app=express();

// const port=process.env.port || 8080 //this is used for server port z

//  const authRoute=require('./routes/auth_route');

//  const mongoose=require('mongoose');

// const bodyParser = require('body-parser');
// const cors=require('cors');
//  mongoose.connect('',(err)=>{
//    if(err){
//       console.log("Database is not connected");  
//      }else{
//         console.log("databse is connected...")
//    }
//  }); 
// mongoose.set('strictQuery', true);
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json());
// app.use(cors())
// app.use('/auth',authRoute);


//  app.get('/',(req,res) => {
//      res.send('welcome to Gis Server.... ');
//  })
// app.listen(port,()=>{
// console.log("Node server is connected..",port);
// })


// time1
// Testing123

// server.js

// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb+srv://time1:time1@cluster0.8qkzhs0.mongodb.net/?retryWrites=true&w=majority', {

  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a schema for the activity model
const activitySchema = new mongoose.Schema({
  name: String
});

// Create a model for the activity collection
const Activity = mongoose.model('Activity', activitySchema);

// Create a POST endpoint to receive activity data
app.post('/api/activity', (req, res) => {
  const name = req.body.name;
  const activity = new Activity({ name });
  const string=req.body.activity;
  console.log(req.body.name);
  activity.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send('Activity saved successfully');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
