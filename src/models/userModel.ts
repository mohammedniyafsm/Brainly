import mongoose, { Schema, model, Document } from "mongoose";


interface UserI extends Document {
  username: string;
  email: string;
  password: string;
}


const UserSchema = new Schema<UserI>({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


const User = model<UserI>("User", UserSchema);
export default User;
