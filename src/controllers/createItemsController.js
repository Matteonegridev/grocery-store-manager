import Inventory from "../mongoose/schema/Schema.js";

const getForm = async (req, res) => {
  res.render("partials/createItems");
};

const createItems = async (req, res) => {
  try {
    const createInventory = new Inventory(req.body);
    const saveItem = await createInventory.save();
    return res.redirect("/items");
  } catch (error) {
    res.status(500).send("Error registering Item", error);
  }
};

export default { getForm, createItems };
