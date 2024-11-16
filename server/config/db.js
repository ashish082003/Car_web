import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conne=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected:${conne.connection.name}`);
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
// connectDB();
export default connectDB;