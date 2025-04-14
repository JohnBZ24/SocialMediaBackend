import mongoose from "mongoose";
const { Schema } = mongoose;
const authschema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});
export default mongoose.model("auth", authschema);
