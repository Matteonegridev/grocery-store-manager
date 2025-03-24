import mongoose from "mongoose";
import mongooseCurrency from "mongoose-currency";
mongooseCurrency.loadType(mongoose);

const inventorySchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  quantity: {
    type: mongoose.Schema.Types.Number,
    required: true,
    min: 0,
  },
  price: {
    type: mongoose.Types.Currency,
    currency: "USD",
    precision: 2,
    required: true,
    min: 0,
  },
  expiryDate: {
    type: mongoose.Schema.Types.Date,
    required: true,
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
