const { Schema, model } = require("mongoose");
const productSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  purchased_from: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Product = model("Product", productSchema);
module.exports = Product;
