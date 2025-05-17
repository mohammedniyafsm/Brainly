import express from "express";
import mongoose from "mongoose";
import router from './routes/userRoute';
import { connectToDatabase } from "./config/db";
import dotenv from 'dotenv'


dotenv.config();
connectToDatabase(); 

const app=express();
const PORT=3000;

app.use(express.json());

app.use('/api/users',router);

app.listen(PORT,()=>{
    console.log("Port Listining at 3000");
    
})