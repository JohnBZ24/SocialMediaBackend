import mongoose from "mongoose";
import post from "../postModule/post.model.js";
const { Schema } = mongoose;
const pageschema = new Schema({
  post: { type: [post], required: false, unique: true },
  ownerpassword: { type: String, required: true },
  email: { type: String, required: true },});
export default mongoose.model("page", pageschema);
