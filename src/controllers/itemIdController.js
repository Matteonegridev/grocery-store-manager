import Inventory from "../mongoose/schema/Schema.js";

const viewSingleItem = async (req, res) => {
  const item = await Inventory.findById(req.params.itemId);

  return res.render("partials/itemsId", {
    item: item,
    parentPage: "/items",
  });
};

export default viewSingleItem;
