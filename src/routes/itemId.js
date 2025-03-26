import express from "express";
import viewSingleItem from "../controllers/itemIdController.js";
import updateItem from "../controllers/itemsIdPutController.js";
import Inventory from "../mongoose/schema/Schema.js";

const router = express.Router({ mergeParams: true });

router.get("/update/:itemId", async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.itemId);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.render("partials/updateitem", { updateItem: item });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/:itemId", viewSingleItem);
router.put("/:itemId", updateItem);

export default router;
