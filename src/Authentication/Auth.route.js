import express from "express";
import authController from "./Auth.controller.js";
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
export default router; // leh mna3mela export la ha
