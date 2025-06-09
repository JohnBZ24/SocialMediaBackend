import mongoose from "mongoose";

const { Schema } = mongoose;
const pageschema = new Schema({
  bio: { type: String, required: false },
  description: { type: String, required: false },
  userId: { type: String, required: true, unique: false },
});
export default mongoose.model("page", pageschema);
