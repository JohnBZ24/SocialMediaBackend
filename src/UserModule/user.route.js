import express from "express";
import userController from "./user.controller.js";
import authencticateJwt from "../Authentication/authenticator.js";
const router = express.Router();
router.get("/findOne", userController.findOne);
router.get("/all", authencticateJwt, userController.findAll);
router.delete("/delete1", userController.deleteUser);
export default router;
