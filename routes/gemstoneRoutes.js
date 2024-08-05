const express = require("express");
const router = express.Router();

const {
  getAllGemstone,
  getGemstoneById,
  deleteGemstoneById,
  addGemstone
} = require("../controller/gemstoneController.js");

// Fetch all Product
router.get("/all", getAllGemstone);

// Fetch single product by id
router.get("/get/:id", getGemstoneById);

// Delete product by id
router.delete("/del/:id", deleteGemstoneById);

// Add Product
router.post("/add", addGemstone);

module.exports = router;
