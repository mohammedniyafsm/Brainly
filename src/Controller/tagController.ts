import { Response, Request } from "express";
import Tag from '../models/tagModel';

export const AddTag = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;

  try {
    const tagExist = await Tag.findOne({ name, userId: req.user });

    if (!tagExist) {
      const newTag = new Tag({
        name,
        userId: req.user,
      });

      await newTag.save();
      res.status(200).json({ message: "Tag Added Successfully", name });
    } else {
      res.status(400).json({ message: "Tag Already Exists" });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
