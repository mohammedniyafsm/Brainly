import mongoose, { Schema, model, Document } from "mongoose";


export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
}


const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },

});


const User = model<IUser>("User", UserSchema);
export default User;
