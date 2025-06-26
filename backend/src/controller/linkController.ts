import { Request, Response } from "express";
import Content from "../models/contentModel";
import Link from "../models/linkModel";

// POST /shareBrain
export const ShareLink = async (req: Request, res: Response): Promise<void> => {
  const { share } = req.body;
  const userId = req.user;

  try {
    if (share) {
      let existingLink = await Link.findOne({ userId });

      if (existingLink) {
        res.status(200).json({ hash: existingLink.hash });
        return;
      } else {
        const hash = Math.random().toString(36).substr(2, 8); // Random 8-char hash
        const newLink = await Link.create({ userId, hash });
        res.status(201).json({ hash: newLink.hash });
        return;
      }
    } else {
      await Link.deleteOne({ userId });
      res.status(200).json({ message: "Link Deleted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};


// GET /:sharelink
export const getShareLink = async (req: Request, res: Response): Promise<void> => {
  const { sharelink } = req.params;

  try {
    const link = await Link.findOne({ hash: sharelink });

    if (!link) {
      res.status(404).json({ error: "Shared link does not exist" });
      return;
    }

    const content = await Content.find({ userId: link.userId }).populate('userId', 'username');

    res.status(200).json({ content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve content" });
  }
};