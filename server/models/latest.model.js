import mongoose from "mongoose";
const Schema = mongoose.Schema;

let LatestSchema = new Schema(
    {
        name:{
            type:String
        },
        path:{
            type:String
        }
    }
)

export const latestmodel = mongoose.model('Baneer',LatestSchema);