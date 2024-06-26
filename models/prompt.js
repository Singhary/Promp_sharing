import mongoose, { models } from "mongoose";

const promptSchema = new mongoose.Schema({
    creator:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User' ,
    },
    prompt:{
        type:String,
        required:[true,"Prompt is required!!!"],
    },
    tag:{
        type:String,
        required:[true,"Tag is required!!!"],
    }
}) ;

const Prompt = mongoose.models.Prompt || new mongoose.model("Prompt",promptSchema) ;

export default Prompt ;