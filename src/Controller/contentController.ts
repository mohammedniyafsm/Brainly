import { Response ,Request } from "express";
import Content ,{IContent} from '../models/contentModel';
import Tag from '../models/tagModel';


export const AddContent = async( req:Request,res:Response) : Promise<void>=>{
    const { type,link,title,tag } = req.body;
    try {
        const validTypes=['document','tweet','youtube','link'];
        if(!validTypes.includes(type)){
            res.status(411).json({ message: 'Invalid content type' });
            return;
        }
        const tagDocs = await Promise.all(
        tag.map(async (tagName: string) => {
        let tag = await Tag.findOne({ name: tagName });
        if (!tag) {
          tag = new Tag({ name: tagName });
          await tag.save();
        }
        return tag._id;
      })
    );
        const content = new Content({
      userId: req.user,
      type,
      link,
      title,
      tags: tagDocs,
    });
    await content.save();
    res.status(200).json({ message: 'Content added successfully', content });
    } catch (error) {
         res.status(500).json({ message: 'Server error', error });
    }
}
