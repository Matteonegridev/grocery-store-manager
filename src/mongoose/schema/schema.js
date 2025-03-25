import mongoose from "mongoose";
import currency from "mongoose-currency";
currency.loadType(mongoose);

const inventorySchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.String,
  },
  quantity: {
    type: mongoose.Schema.Types.Number,
    min: 0,
  },
  price: {
    type: mongoose.Schema.Types.Currency,
    currency: "USD",
    precision: 2,
    min: 0,
  },
  expiryDate: {
    type: mongoose.Schema.Types.Date,
    created: Date,
    validate: {
      validator: (date) => {
        return date > Date.now();
      },
    },
    message: "Expiry date must be in the future",
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;
