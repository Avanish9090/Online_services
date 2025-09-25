import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name:{
        type:String
    },
    path:{
        type:String
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
    price:{
        type:String
    }
})

export const ProductModel = mongoose.model('product',ProductSchema);