import mongoose  from "mongoose";
const Schema = mongoose.Schema;

let ConstSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
       type:String,
       required:true, 
    },
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})
export const ContModel = mongoose.model('contact',ConstSchema);