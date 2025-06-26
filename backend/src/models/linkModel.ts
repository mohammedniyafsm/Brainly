import mongoose, { Model, Schema } from "mongoose";

export interface ILink extends Document {
    id : mongoose.Types.ObjectId;
    hash : string;
    userId : mongoose.Types.ObjectId;
}

export const LinkSchema : Schema <ILink> =new Schema({
    hash : {
        type : String,
        required : true,
        unique : true,
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }
})

const Link : Model <ILink> = mongoose.model <ILink>('Link',LinkSchema);
export default Link;
