import { Response ,Request } from "express";
import Tag ,{ITag} from '../models/tagModel';


export const AddTag =async(req:Request,res:Response) :Promise <void>=>{
    const {name} = req.body;
    try {
        const Tagg= new Tag({name}) 
        await Tagg.save();
        res.status(200).json({message:"Tag Added Succesfully",name});
        return;
    } catch (error) {
       res.status(500).json({ message: 'Server error', error });
       return;
    }

}