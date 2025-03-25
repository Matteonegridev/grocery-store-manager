import express from "express";
import { validateItems, checkDoubleItems } from "../middleware/itemsSchema.js";
import sanitizeItems from "../middleware/sanitizeItems.js";
import createItemsController from "../controllers/createItemsController.js";

const router = express.Router();

router.get("/", createItemsController.getForm);
router.post("/", sanitizeItems, validateItems, checkDoubleItems, createItemsController.createItems);

export default router;
