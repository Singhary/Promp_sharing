import mongoose from "mongoose";

let isConnected = false ;

export const connectToDb = async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('mongodb is already connected')
    }
    try {
      await mongoose.connect(process.env.MONGO_URL,{
        dbName:"share_prompt",
      });       
      isConnected = true ;
    console.log("MONGO DB connected!")

    } catch (error) {
        console.log("There is a error" , error) ;
    }
}
