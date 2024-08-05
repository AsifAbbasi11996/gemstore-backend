const Rakhi = require("../schema/rakhiSchema.js");

// Fetch all products
const getAllRakhi = async (req, res) => {
  try {
    const rakhi = await Rakhi.find();
    res.status(200).json(rakhi);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch single product by id
const getRakhiById = async (req, res) => {
  const { id } = req.params;

  try {
    const rakhi = await Rakhi.findById(id);
    if (!rakhi) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(rakhi);
  } catch (error) {
    console.error("Error fetching product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product by id
const deleteRakhiById = async (req, res) => {
  const { id } = req.params;

  try {
    const rakhi = await Rakhi.findByIdAndDelete(id);
    if (!rakhi) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Add product
const addRakhi = async (req, res) => {
  const {
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    About,
    Benefits,
  } = req.body;

  // Validate required fields
  if (!ProductID || !Name || !Category || !Mrp || !SP || !Images || !About || !Benefits) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create new product with default rating if not provided
  const newRakhi = new Rakhi({
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    About,
    Benefits,
  });

  try {
    const savedRakhi = await newRakhi.save();
    res.status(201).json(savedRakhi);
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllRakhi,
  getRakhiById,
  deleteRakhiById,
  addRakhi,
};
