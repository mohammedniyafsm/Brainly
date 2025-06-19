import { Response, Request } from "express";
import Content from "../models/contentModel";
import User from "../models/userModel";

export const AddContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, link, type } = req.body;
    const userId = req.user;

    const contentExist = await Content.findOne({ userId });
    const contentTypes = ['Document', 'Twitter', 'Youtube', 'Link'];

    if(!contentTypes.includes(type)){
      res.status(400).json({message : "Invalid Type"}); return;
    }

    if (!contentExist) {
      const newContent = new Content({
        userId,
        content: [{ title, link, type }],
      });
      await newContent.save();
      res.status(201).json({ message: "Content created", data: newContent });
      return ;
    } else {
      contentExist.content.push({ title, link, type });
      await contentExist.save();
      res.status(200).json({ message: "Content added", data: contentExist });
      return ;
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const deleteContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body; 
    const userId = req.user;

    const contentDoc = await Content.findOne({ userId });

    if (!contentDoc) {
      res.status(404).json({ message: "Content document not found" });
      return;
    }

    contentDoc.content = contentDoc.content.filter(item => item._id?.toString() !== id);

    await contentDoc.save();

    res.status(200).json({ message: "Content item deleted", data: contentDoc });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user;

    const userContent = await Content.findOne({ userId });

    if (!userContent) {
      res.status(404).json({ message: "User content not found" });
      return;
    }

    res.status(200).json({ content: userContent.content });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateContent=async(req:Request,res:Response):Promise<void>=>{
  
}