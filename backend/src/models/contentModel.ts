import mongoose ,{Document,Model,Schema,model} from "mongoose";

const contentTypes = ['Document','Twitter', 'Youtube', 'Link']

export interface IContentItem extends Document {
    _id:mongoose.Types.ObjectId;
    title:string;
    type : string;
    link :string;
    // tags:mongoose.Types.ObjectId[];
}

export const contentItemSchema : Schema <IContentItem> = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: contentTypes,
  },
  link: {
    type: String,
    required: true,
  },
});


export interface IContent extends Document {
    userId : mongoose.Types.ObjectId,
    _id : mongoose.Types.ObjectId,
    content:IContentItem[],
}

const contentSchema : Schema <IContent> = new Schema ({
    userId : {
        type :Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    content : {
        type :[contentItemSchema],
        required : true
    }


})

const Content : Model <IContent> = mongoose.model<IContent>('Content',contentSchema);
export default Content;