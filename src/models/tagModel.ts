import mongoose, { Document, Schema, Model } from "mongoose";

interface ITagItem {
  _id: mongoose.Types.ObjectId;
  name: string;
}

export interface ITag extends Document {
  userId: mongoose.Types.ObjectId;
  tags: ITagItem[];  
}


const TagItemSchema = new Schema<ITagItem>({
//   _id: {
//     type: Schema.Types.ObjectId,
//     default: () => new mongoose.Types.ObjectId()
//   },
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const TagSchema: Schema<ITag> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true 
  },
  tags: {
    type: [TagItemSchema],
    default: []
  }
});

const Tag: Model<ITag> = mongoose.model<ITag>('Tag', TagSchema);
export default Tag;
