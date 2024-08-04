const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProductID: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Mrp: {
    type: Number,
    required: true,
  },
  SP: {
    type: Number,
    required: true,
  },
  Images: {
    type: [String],
    required: true,
  },
  Color: {
    type: String,
  },
  Type: {
    type: String,
  },
  Rating: {
    type: Number,
    default: 4.8,
  },
});

module.exports = mongoose.model("Product", productSchema);
