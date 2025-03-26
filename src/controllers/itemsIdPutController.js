import Inventory from "../mongoose/schema/Schema.js";

const updateItem = async (req, res) => {
  const id = req.params.updateId;
  const newdata = {
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
    expiryDate: req.body.expiryDate,
  };
  const findItem = await Inventory.findByIdAndUpdate(id, newdata, { new: true, runValidators: true });
  res.redirect(`/items/${id}`);

  console.log(findItem);
  console.log(newdata);
};

export default updateItem;
