const Trees = require("../schema/treesSchema.js");

// Fetch all products
const getAllTrees = async (req, res) => {
  try {
    const trees = await Trees.find();
    res.status(200).json(trees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch single product by id
const getTreesById = async (req, res) => {
  const { id } = req.params;

  try {
    const trees = await Trees.findById(id);
    if (!trees) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(trees);
  } catch (error) {
    console.error("Error fetching product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product by id
const deleteTreesById = async (req, res) => {
  const { id } = req.params;

  try {
    const trees = await Trees.findByIdAndDelete(id);
    if (!trees) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Add product
const addTrees = async (req, res) => {
  const {
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    About,
    Benefits,
    Description,
  } = req.body;

  // Validate required fields
  if (!ProductID || !Name || !Category || !Mrp || !SP || !Images || !About || !Benefits || !Description) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create new product with default rating if not provided
  const newTrees = new Trees({
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    About,
    Benefits,
    Description,
  });

  try {
    const savedTrees = await newTrees.save();
    res.status(201).json(savedTrees);
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllTrees,
  getTreesById,
  deleteTreesById,
  addTrees,
};
