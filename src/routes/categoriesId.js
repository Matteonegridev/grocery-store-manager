import express from "express";
import viewCategories from "../controllers/categoriesIdController.js";

const router = express.Router();

router.get("/:categoriesId", viewCategories);

export default router;
