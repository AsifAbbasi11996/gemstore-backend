const express = require("express");
const router = express.Router();

const {
  getAllRakhi,
  getRakhiById,
  deleteRakhiById,
  addRakhi
} = require("../controller/rakhiController.js");

// Fetch all Product
router.get("/all", getAllRakhi);

// Fetch single product by id
router.get("/get/:id", getRakhiById);

// Delete product by id
router.delete("/del/:id", deleteRakhiById);

// Add Product
router.post("/add", addRakhi);

module.exports = router;
