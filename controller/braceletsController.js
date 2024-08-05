const Bracelets = require("../schema/braceletsSchema.js");

// Fetch all products
const getAllBracelets = async (req, res) => {
  try {
    const bracelets = await Bracelets.find();
    res.status(200).json(bracelets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch single product by id
const getBraceletsById = async (req, res) => {
  const { id } = req.params;

  try {
    const bracelets = await Bracelets.findById(id);
    if (!bracelets) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(bracelets);
  } catch (error) {
    console.error("Error fetching product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product by id
const deleteBraceletsById = async (req, res) => {
  const { id } = req.params;

  try {
    const bracelets = await Bracelets.findByIdAndDelete(id);
    if (!bracelets) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Add product
const addBracelets = async (req, res) => {
  const {
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    Description,
    Benefits
  } = req.body;

  // Validate required fields
  if (!ProductID || !Name || !Category || !Mrp || !SP || !Images || !Description || !Benefits) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create new product with default rating if not provided
  const newBracelets = new Bracelets({
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    Description,
    Benefits,
  });

  try {
    const savedBracelets = await newBracelets.save();
    res.status(201).json(savedBracelets);
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllBracelets,
  getBraceletsById,
  deleteBraceletsById,
  addBracelets,
};
