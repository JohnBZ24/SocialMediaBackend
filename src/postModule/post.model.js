import mongoose from "mongoose";
import comment from "../commentModule/commentmodel.js";
const { Schema } = mongoose;
const postSchema = new Schema({
  content: { type: String, required: true, unique: true },
  comment: { type: [comment], required: false },
  ownerpassword: { type: String, required: true },
});
export default mongoose.model("post", postSchema);
