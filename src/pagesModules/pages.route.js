import express from "express";
import pagesController from "./pages.controller.js";
const router = express.Router();
router.post("/createpage", pagesController.createPage);
router.get("/findOne", pagesController.findPage);
router.get("/findAll", pagesController.findAll);
router.delete("/delete", pagesController.deleteOne);
export default router;
