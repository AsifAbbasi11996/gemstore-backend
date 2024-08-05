const mongoose = require("mongoose");

const braceletsSchema = new mongoose.Schema({
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
  Description: {
    type: String,
    required: true,
  },
  Benefits: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Bracelets", braceletsSchema);
