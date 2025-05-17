import { Request, Response } from 'express';
import User from '../models/userModel';

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    const EmailExist = await User.findOne({ email });
    if (EmailExist) {
       res.status(400).json({ message: "Email already exists" });
    }

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const Login=async(req:Request,res:Response)=>{
    

}