const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const employeelist=new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String,unique:true, required:true}
})

module.exports=mongoose.model('Employee',employeelist)