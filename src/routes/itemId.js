import express from "express";
import viewSingleItem from "../controllers/itemIdController.js";

const router = express.Router({ mergeParams: true });

router.get("/:itemId", viewSingleItem);

export default router;
