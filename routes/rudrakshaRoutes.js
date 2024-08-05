const express = require("express");
const router = express.Router();

const {
  getAllRudraksha,
  getRudrakshaById,
  deleteRudrakshaById,
  addRudraksha
} = require("../controller/rudrakshaController.js");

// Fetch all Product
router.get("/all", getAllRudraksha);

// Fetch single product by id
router.get("/get/:id", getRudrakshaById);

// Delete product by id
router.delete("/del/:id", deleteRudrakshaById);

// Add Product
router.post("/add", addRudraksha);

module.exports = router;
