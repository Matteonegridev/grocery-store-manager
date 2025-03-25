import Inventory from "../mongoose/schema/Schema.js";

export const validateItems = async (req, res, next) => {
  const tempItem = new Inventory(req.body);

  try {
    await tempItem.validate();
    next();
  } catch (error) {
    const errors = Object.values(error.errors).map((err) => ({
      field: err.path,
      message: err.message,
    }));
    return res.status(400).json({ errors });
  }
};

export const checkDoubleItems = async (req, res, next) => {
  const { name } = req.body;
  const existInventory = await Inventory.findOne({ name });
  try {
    if (existInventory) {
      return res.redirect("/items/add");
    }
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};
