const Rudraksha = require("../schema/rudrakshaSchema.js");

// Fetch all products
const getAllRudraksha = async (req, res) => {
  try {
    const rudraksha = await Rudraksha.find();
    res.status(200).json(rudraksha);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch single product by id
const getRudrakshaById = async (req, res) => {
  const { id } = req.params;

  try {
    const rudraksha = await Rudraksha.findById(id);
    if (!rudraksha) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(rudraksha);
  } catch (error) {
    console.error("Error fetching product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product by id
const deleteRudrakshaById = async (req, res) => {
  const { id } = req.params;

  try {
    const rudraksha = await Rudraksha.findByIdAndDelete(id);
    if (!rudraksha) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Add product
const addRudraksha = async (req, res) => {
  const {
    ProductID,
    Name,
    Category,
    Purpose,
    Guarantee,
    DivineCollection,
    Mrp,
    SP,
    Images,
    About,
    Rating,
  } = req.body;

  // Validate required fields
  if (!ProductID || !Name || !Category || !Purpose || !Guarantee || !DivineCollection || !Mrp || !SP || !Images || !About || !Rating) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create new product with default rating if not provided
  const newRudraksha = new Rudraksha({
    ProductID,
    Name,
    Category,
    Purpose,
    Guarantee,
    DivineCollection,
    Mrp,
    SP,
    Images,
    About,
    Rating,
  });

  try {
    const savedRudraksha = await newRudraksha.save();
    res.status(201).json(savedRudraksha);
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllRudraksha,
  getRudrakshaById,
  deleteRudrakshaById,
  addRudraksha,
};
