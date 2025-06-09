import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
export const connect = () => {
  console.log(connectionString);
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Data base connected succesfully ");
    })
    .catch((err) => console.error("MongoDB connection error", err));
};
export default connect;
