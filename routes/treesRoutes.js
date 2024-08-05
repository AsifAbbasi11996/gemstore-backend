const express = require("express");
const router = express.Router();

const {
  getAllTrees,
  getTreesById,
  deleteTreesById,
  addTrees
} = require("../controller/treesController.js");

// Fetch all Product
router.get("/all", getAllTrees);

// Fetch single product by id
router.get("/get/:id", getTreesById);

// Delete product by id
router.delete("/del/:id", deleteTreesById);

// Add Product
router.post("/add", addTrees);

module.exports = router;
