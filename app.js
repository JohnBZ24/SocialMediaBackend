import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import AuthRoute from "./src/Authentication/Auth.route.js";
import userRoute from "./src/UserModule/user.route.js";
import connect from "./src/config/database.js";
import pageRoute from "./src/pagesModules/pages.route.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();
const { json, urlencoded } = bodyParser;
app.use(urlencoded({ extended: false }));
connect();
app.use(json());
app.use("/auth", AuthRoute);
app.use("/user", userRoute);
app.use("/pages", pageRoute);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(" port listening on port 3000");
});
