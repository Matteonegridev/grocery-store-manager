import express from "express";
import getItems from "../controllers/itemsController.js";
import sanitizeItems from "../middleware/sanitizeItems.js";

const router = express.Router();

router.get("/", sanitizeItems, getItems);

export default router;
