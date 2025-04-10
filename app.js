import express from "express";
import bodyParser from "body_parser";
import AuthRoute from "./src/Authentication/Auth.route.js";
import connect from "./src/config/database.js";

const app = express();
const { json, urlencoded } = bodyParser;
app.use("*", urlencoded({ extended: false }));
connect();
app.use("*", json());
app.use("/Authentication", AuthRoute);
app.listen(3000, () => {
  console.log(" port listening on port 3000");
});
