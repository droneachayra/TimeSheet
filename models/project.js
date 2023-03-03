const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const projectlist=new Schema({
    id:{type:Number, unique:true, required:true},
    name:{type:String, required:true},
    status:{type:String, required:true},
    starttime:{type:Number, default:Date.now().valueOf(), required:true},
    endtime:{type:Number, required:true}
})

module.exports=mongoose.model('Project',projectlist)