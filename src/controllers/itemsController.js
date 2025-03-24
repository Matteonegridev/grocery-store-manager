import Inventory from "../mongoose/schema/Schema.js";

const getItems = async (req, res) => {
  try {
    const findItems = await Inventory.find(req.sanitizedQuery);

    if (findItems.length === 0) {
      res.status(404).send("There are no items yet");
    }
    return res.render("items", { findItems });
  } catch (error) {
    return res.send(error);
  }
};

const createItems = async (req, res) => {
  try {
    const createInventory = new Inventory(req.body);
    const saveItem = await createInventory.save();
    return res.status(201).json(saveItem);
  } catch (error) {
    res.status(500).send("Error registering Item", error);
  }
};

export default { getItems, createItems };
