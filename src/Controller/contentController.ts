import { Response, Request } from "express";
import mongoose from "mongoose";
import Content from "../models/contentModel";
import Tag from "../models/tagModel";

export const AddContent = async (req: Request, res: Response): Promise<void> => {
  const { type, link, title, tag } = req.body;

  try {
    // Validate content type
    const validTypes = ['document', 'tweet', 'youtube', 'link'];
    if (!validTypes.includes(type)) {
      res.status(411).json({ message: 'Invalid content type' });
      return;
    }

    // Make sure `tag` is always an array of strings
    const tagsArray: string[] = Array.isArray(tag) ? tag : [tag];

    // Find tag document for the logged-in user
    const tagDoc = await Tag.findOne({ userId: req.user });
    if (!tagDoc) {
      res.status(404).json({ message: 'No tags found for this user' });
      return;
    }

    // Find matching tag IDs from user's tags
    const tagIds = tagsArray.map((tagName: string) => {
      const foundTag = tagDoc.tags.find(t => t.name === tagName);
      if (!foundTag) {
        throw new Error(`Tag "${tagName}" not found for this user`);
      }
      return foundTag._id;
    });

    // Create and save the content
    const content = new Content({
      userId: req.user,
      type,
      link,
      title,
      tags: tagIds,
    });

    await content.save();
    res.status(200).json({ message: 'Content added successfully', content });

  } catch (error: any) {
    console.error("AddContent error:", error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
