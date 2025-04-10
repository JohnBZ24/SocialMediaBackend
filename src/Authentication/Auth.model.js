import mongoose from "mangoose";
const { schema } = mongoose;
const authschema = new schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});
export default mongoose.model("auth", authschema);
