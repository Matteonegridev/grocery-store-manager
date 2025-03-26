import express from "express";
import sanitizeItems from "../middleware/sanitizeItems.js";
import getCategories from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", sanitizeItems, getCategories);

export default router;
