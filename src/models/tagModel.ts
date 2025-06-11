import mongoose , {Document,Model,Schema,model} from "mongoose";

interface ITag extends Document {
    name:string,
}


const TagSchema : Schema <ITag>  =new Schema ({
    name : {
        type : String,
        required : true,
        unique: true,
        trim: true,
    }

})

const Tag : Model <ITag> =mongoose.model<ITag>('Tag',TagSchema);
export default Tag;