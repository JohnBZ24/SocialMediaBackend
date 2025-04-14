import mongoose from "mongoose";
const { Schema } = mongoose;
const commentschema = new Schema({
  content: { type: String, required: true, unique: false },
  ownersname: { Id: String, required: true },
});
export default mongoose.model("comment", commentschema);
s;
