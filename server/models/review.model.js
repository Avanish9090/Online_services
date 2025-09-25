import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ReviewSchema = new Schema({
        name:{
            type:String
        },
        says:{
            type:String
        },
        
})

export const ReviewModel = mongoose.model('review',ReviewSchema);