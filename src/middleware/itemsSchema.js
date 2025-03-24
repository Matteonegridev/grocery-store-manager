const validateItems = async (req, res, next) => {
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

const checkDoubleItems = async (req, res, next) => {
  const existInventory = await Inventory.findOne({ name: req.body.name });
  try {
    if (existInventory) {
      return res.status(409).json({ msg: "Item already exist" });
    }
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { validateItems, checkDoubleItems };
