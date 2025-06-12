import mongoose , {Document,Model,Schema,model} from "mongoose";

export interface ITag extends Document {
    _id:mongoose.Types.ObjectId,
    name:string,
    userId:mongoose.Types.ObjectId,
}


const TagSchema : Schema <ITag>  =new Schema ({
    name : {
        type : String,
        required : true,
        unique: true,
        trim: true,
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'Tag',
        required : true,
    }

})

const Tag : Model <ITag> =mongoose.model<ITag>('Tag',TagSchema);
export default Tag;