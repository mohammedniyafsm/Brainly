import jwt from "jsonwebtoken";
import dotenv from 'dotenv'


dotenv.config();

const key = process.env.JWT_SECRET_KEY ;

export const generateToken = async (id: string): Promise<string> => {
    try {
        if (!key) throw new Error("JWT_SECRET_KEY is not defined in environment variables");
        const payload = { id };         
        const token = jwt.sign(payload, key, { expiresIn: '30d' });
        return token;
    } catch (error) {
        console.error("Error While Generating JWT Token", error);
        throw error; 
    }
};


