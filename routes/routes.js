const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductsById,
  deleteProductById,
  addProduct
} = require("../controller/controller.js");

// Add Product
router.post("/add", addProduct);

// Fetch all Product
router.get("/all", getAllProducts);

// Fetch single product by id
router.get("/get/:id", getProductsById);

// Delete product by id
router.delete("/del/:id", deleteProductById);


module.exports = router;
