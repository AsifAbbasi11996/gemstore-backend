const express = require("express");
const router = express.Router();

const {
  getAllBracelets,
  getBraceletsById,
  deleteBraceletsById,
  addBracelets
} = require("../controller/braceletsController.js");

// Fetch all Product
router.get("/all", getAllBracelets);

// Fetch single product by id
router.get("/get/:id", getBraceletsById);

// Delete product by id
router.delete("/del/:id", deleteBraceletsById);

// Add Product
router.post("/add", addBracelets);

module.exports = router;
