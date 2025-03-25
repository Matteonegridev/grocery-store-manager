import Inventory from "../mongoose/schema/Schema.js";

const getItems = async (req, res) => {
  try {
    const findItems = await Inventory.find(req.sanitizedQuery);

    if (findItems.length === 0) {
      return res.status(404).send("There are no items yet");
    }
    return res.render("partials/items", { items: findItems });
  } catch (error) {
    return res.send(error);
  }
};

export default getItems;
