const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const activitylist=new Schema({
    id:{type:Number, unique:true, required:true},
    name:{type:String, required:true},
    code:{type:String,required:true}
})

const employeelist=new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String,unique:true, required:true}
})

const projectlist=new Schema({
    id:{type:Number, unique:true, required:true},
    name:{type:String, required:true},
    status:{type:String, required:true},
    starttime:{type:Number, default:Date.now().valueOf(), required:true},
    endtime:{type:Number, required:true}
})

const userSchema=new Schema({
    displayName:{type:String},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    create_at:{type:Number,default:Date.now().valueOf()},
    updated_at:{type:Number,default:Date.now().valueOf()}
})

module.exports=mongoose.model('User',userSchema)
module.exports=mongoose.model('Activity',activitylist)
module.exports=mongoose.model('Employee',employeelist)
module.exports=mongoose.model('Project',projectlist)