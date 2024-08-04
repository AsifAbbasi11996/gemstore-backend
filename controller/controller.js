const Product = require("../schema/schema.js");

// Fetch all products
// const getAllProducts = async (req, res) => {
//   const { name, category, sort, select } = req.query;

//   const queryObject = {};

//   if (name) {
//     queryObject.name = name;
//   }

//   if (category) {
//     queryObject.category = category;
//   }

//   let apiData = Product.find(queryObject);

//   if (sort) {
//     let sortFix = sort.split(",").join(" ");
//     apiData = apiData.sort(sortFix);
//   }

//   if (select) {
//     let selectFix = select.split(",").join(" ");
//     apiData = apiData.select(selectFix);
//   }

//   // let page = Number(req.query.page) || 1;
//   // let limit = Number(req.query.limit) || 10;

//   // let skip = (page - 1) * limit;

//   // apiData = apiData.skip(skip).limit(limit);

//   console.log(queryObject);

//   const Product = await apiData.exec();
//   res.status(200).json({ Product, nbHits: Product.length });
// };

const getAllProducts = async(req, res) =>{
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
   console.log(error);
   res.status(500).json({ message: "Server error" });
  }
}

// Fetch single product by id
const getProductsById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product by id
const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product :", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Add product
const addProduct = async (req, res) => {
  const { ProductID, Name, Category, Mrp, SP, Images, Color, Type, Rating } =
    req.body;

  // Validate required fields
  if (!ProductID || !Name || !Category || !Mrp || !SP || !Images) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create new product with default rating if not provided
  const newProduct = new Product({
    ProductID,
    Name,
    Category,
    Mrp,
    SP,
    Images,
    Color,
    Type,
    Rating: Rating || 4.8,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  deleteProductById,
  addProduct,
};
