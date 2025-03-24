import express from "express";
import itemsController from "../controllers/itemsController.js";
import { validateItems, checkDoubleItems } from "../middlewares/itemsSchema";

const router = express.Router();

router.get("/", itemsController.getItems);
router.post("/", validateItems, checkDoubleItems, itemsController.createItems);

export default router;
