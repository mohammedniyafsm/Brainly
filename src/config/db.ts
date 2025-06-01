import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

interface CustomError extends Error{
    message:string
}

export const connectToDatabase=async():Promise<void>=>{
    try {
        const mongoUrl:string =process.env.MONGO_URL as string;
        if(!mongoUrl){
            throw new Error('MONGO_URL is not defined in environment variables.');
        }
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB Database");
    } catch (error) {
         const err = error as CustomError;
        console.error(`Database connection error: ${err.message}`);
        process.exit(1);
        
    }

}
