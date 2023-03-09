const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const employeelist=new Schema({
    id:{type:Number, required:true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String,unique:true, required:true},
    password:{type:String,unique:true, required:true},

}, {
    collection: 'employees'
 })

module.exports=mongoose.model('Employee',employeelist)

let Employee = new Schema({
    name: {type: String},
    email: {
       type: String
    },
    designation: {
       type: String
    },
    phoneNumber: {       type: Number    }
 }, {
    collection: 'employees'
 })