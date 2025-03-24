import { name } from "ejs";
import mongoose, { Schema } from "mongoose";

const inventorySchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.String,
  },
  quantity: {
    type: mongoose.Schema.Types.Number,
  },
  price: {
    type: mongoose.Schema.Types.String,
  },
  expiryDate: {
    type: mongoose.Schema.Types.String,
  },
});

const Inventory = new Model("Inventory", inventorySchema);

export default Inventory;
