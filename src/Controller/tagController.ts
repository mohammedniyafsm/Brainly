import { Request, Response } from "express";
import mongoose from "mongoose";
import Tag from "../models/tagModel";

export const AddTag = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;

  try {
    const existingTagDoc = await Tag.findOne({ userId: req.user });

    // If no tag document exists for the user, create a new one
    if (!existingTagDoc) {
      const newTagDoc = new Tag({
        userId: req.user,
        tags: [{ name }],
      });

      await newTagDoc.save();
       res.status(200).json({ message: "Tag added successfully", name });
       return;
    }

    // Check if the tag already exists for the user
    const tagAlreadyExists = existingTagDoc.tags.some(
      (tagItem) => tagItem.name === name
    );

    if (tagAlreadyExists) {
       res.status(400).json({ message: "Tag already exists" });
       return;
    }

    // Add new tag to existing tag document
    existingTagDoc.tags.push({
      name,
      _id: new mongoose.Types.ObjectId(),
    });

    await existingTagDoc.save();
     res.status(200).json({
      message: "Tag added successfully",
      tags: existingTagDoc.tags,
    });
    return;
  } catch (error) {
    console.error("AddTag error:", error);
    res.status(500).json({ message: "Server error", error });
    return;
  }
};
