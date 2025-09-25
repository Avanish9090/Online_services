import mongoose from "mongoose";
const Schema = mongoose.Schema;

let FormSchema = new Schema({
        title:{
            type:String
        },
        about:{
            type:String
        },
        document:{
            type:String
        },
        price:{
            type:String
        }
})

export const FormModel = mongoose.model('form',FormSchema);