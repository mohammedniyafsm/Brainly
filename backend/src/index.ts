import express from "express";
import router from './routes/userRoute';
import { connectToDatabase } from "./config/db";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
connectToDatabase(); 

const app=express();
const PORT=3000;
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
}));

app.use(express.json());
app.use('/api/users',router);

app.listen(PORT,()=>{
    console.log("Port Listining at 3000");
    
})