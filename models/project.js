const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const projectlist=new Schema({
    id:{type:Number, unique:true, required:true},
    procode:{type:Number, required:true},
    name:{type:String, required:true},
    status:{type:String, required:true},
    starttime:{type:String, default:Date.now().valueOf(), required:true},
    endtime:{type:String, required:true}
}, {
    collection: 'projects'
 });

module.exports=mongoose.model('Project',projectlist)