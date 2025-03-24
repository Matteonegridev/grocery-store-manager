import express from "express";
import itemsController from "../controllers/itemsController.js";
import { validateItems, checkDoubleItems } from "../middleware/itemsSchema.js";
import sanitizeItems from "../middleware/sanitizeItems.js";

const router = express.Router();

router.get("/", sanitizeItems, itemsController.getItems);
router.post("/", sanitizeItems, validateItems, checkDoubleItems, itemsController.createItems);

export default router;
