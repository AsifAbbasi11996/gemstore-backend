const Gemstone = require("../schema/gemstoneSchema.js");

// Fetch all gemstones
const getAllGemstone = async (req, res) => {
  try {
    const gemstone = await Gemstone.find();
    res.status(200).json(gemstone);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch single gemstone by id
const getGemstoneById = async (req, res) => {
  const { id } = req.params;

  try {
    const gemstone = await Gemstone.findById(id);
    if (!gemstone) {
      return res.status(404).json({ message: "gemstone not Found" });
    }
    res.status(200).json(gemstone);
  } catch (error) {
    console.error("Error fetching gemstone :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete gemstone by id
const deleteGemstoneById = async (req, res) => {
  const { id } = req.params;

  try {
    const gemstone = await Gemstone.findByIdAndDelete(id);
    if (!gemstone) {
      return res.status(404).json({ message: "gemstone not Found" });
    }
    res.status(200).json({ message: "gemstone deleted successfully" });
  } catch (error) {
    console.error("Error deleting gemstone :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Add gemstone
const addGemstone = async (req, res) => {
  const {
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    Color,
    Type,
    About,
    FAQ,
    Benefits,
  } = req.body;

  // Validate required fields
  if (
    !ProductID ||
    !Name ||
    !Category ||
    !Mrp ||
    !SP ||
    !Images ||
    !About ||
    !FAQ ||
    !Benefits
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create new gemstone with default rating if not provided
  const newGemstone = new Gemstone({
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    Color,
    Type,
    About,
    FAQ,
    Benefits
  });

  try {
    const savedGemstone = await newGemstone.save();
    res.status(201).json(savedGemstone);
  } catch (error) {
    console.error("Error adding gemstone:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllGemstone,
  getGemstoneById,
  deleteGemstoneById,
  addGemstone,
};
