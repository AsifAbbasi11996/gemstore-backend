require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./database/db");
require("./productDB")

const PORT = 3000;

const gemstoneRoutes = require("./routes/gemstoneRoutes.js");
const rudrakshaRoutes = require("./routes/rudrakshaRoutes.js");
const braceletsRoutes = require("./routes/braceletsRoutes.js");
const treesRoutes = require("./routes/treesRoutes.js");
const rakhiRoutes = require("./routes/rakhiRoutes.js");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

// middleware or set router
app.use(express.json());
app.use("/api/gemstone", gemstoneRoutes);
app.use("/api/rudraksha", rudrakshaRoutes);
app.use("/api/bracelets", braceletsRoutes);
app.use("/api/trees", treesRoutes);
app.use("/api/rakhi", rakhiRoutes);

// Example for Express.js
const cors = require('cors');
app.use(cors());


const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();