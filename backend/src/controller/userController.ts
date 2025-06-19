import { Request, Response } from 'express';
import User, { IUser } from '../models/userModel';
import { generateToken } from '../utils/jwt';

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;
  try {
    const EmailExist = await User.findOne({ email });
    if (EmailExist) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }
    const user = new User({ username, email, password });
    await user.save();
    // const token = await generateToken(user._id.toString());
    res.status(201).json({ message: "Account created successfully" });
    return;
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    return;
  }
};

export const Login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const emailExist = (await User.findOne({ email }));
    if (!emailExist) {
      res.status(400).json({ message: "Account doesn't exist. Please sign up." });
      return;
    }
    const validPassword = await emailExist.comparePassword(password);
    if (!validPassword) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }
    const token = await generateToken(emailExist._id.toString());
    res.status(200).json({ message: "Logged In", token });
    return;
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    return;
  }
};
