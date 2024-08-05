const mongoose = require("mongoose");

const gemstoneSchema = new mongoose.Schema({
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
  About: {
    type: String,
    required: true,
  },
  FAQ: [
    {
      Question: {
        type: String,
        required: true,
      },
      Answer: {
        type: String,
        required: true,
      },
    },
  ],
  Benefits: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Gemstone", gemstoneSchema);
