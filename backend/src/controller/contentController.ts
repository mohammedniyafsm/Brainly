import { Response, Request } from "express";
import Content from "../models/contentModel";
import User from "../models/userModel";

const getEmbedLink = (url: string, type: string): string | null => {
  try {
    const parsedUrl = new URL(url);

    if (type.toLowerCase() === "youtube") {
      if (parsedUrl.hostname === "youtu.be") {
        return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
      } else if (parsedUrl.hostname.includes("youtube.com")) {
        const v = parsedUrl.searchParams.get("v");
        return v ? `https://www.youtube.com/embed/${v}` : null;
      }
    }

    if (type.toLowerCase() === "twitter") {
      // Case 1: Already a raw Twitter URL
      if (parsedUrl.hostname.includes("twitter.com") || parsedUrl.hostname.includes("x.com")) {
        return url;
      }

      // Case 2: It's a twitframe link, try to extract original
      const rawUrl = parsedUrl.searchParams.get("url");
      if (rawUrl) {
        const decoded = decodeURIComponent(rawUrl);
        if (decoded.includes("status/")) {
          return decoded;
        }
      }

      return null;
    }

    return url;
  } catch {
    return null;
  }
};


export const AddContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, link, type } = req.body;
    const userId = req.user;

    const contentTypes = ['Document', 'Twitter', 'Youtube', 'Link'];
    if (!contentTypes.includes(type)) {
      res.status(400).json({ message: "Invalid Type" });
      return;
    }

    const embedLink = getEmbedLink(link, type);
    if (!embedLink) {
      res.status(400).json({ message: "Invalid or unparseable link" });
      return;
    }

    const contentExist = await Content.findOne({ userId });

    if (!contentExist) {
      const newContent = new Content({
        userId,
        content: [{ title, link: embedLink, type }],
      });
      await newContent.save();
      res.status(201).json({ message: "Content created", data: newContent });
    } else {
      contentExist.content.push({ title, link: embedLink, type });
      await contentExist.save();
      res.status(200).json({ message: "Content added", data: contentExist });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
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

export const updateContent = async (req: Request, res: Response): Promise<void> => {
  // Implement if needed
};