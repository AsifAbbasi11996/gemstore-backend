const mongoose = require("mongoose");

const rudrakshaSchema = new mongoose.Schema({
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
  About: {
    type: [String],
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Rudraksha", rudrakshaSchema);
