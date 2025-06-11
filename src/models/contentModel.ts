import mongoose ,{Document,Schema,model} from "mongoose";

const contentType = ['documents','tweet', 'youtube', 'link']

interface IContent extends Document {
    userId:mongoose.Types.ObjectId;
    type : string;
    link :string;
    title:string;
    tags:mongoose.Types.ObjectId[];
    _id:mongoose.Types.ObjectId;
}

const contentSchema : Schema <IContent> = new Schema ({
    userId : {
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    type : {
        type : String,
        required : true,
        enum : {
            values:contentType,
        }
    },
    link : {
        type : String,
        required : true,
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
     tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
})

// const Content : <IContent> Schema =mongoose.model<IContent>('Content',contentSchema);
// export default Content;