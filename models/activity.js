const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const activitylist=new Schema({
    id:{type:Number, unique:true, required:true},
    name:{type:String, required:true},
    code:{type:String,required:true}
})

module.exports=mongoose.model('Activity',activitylist)