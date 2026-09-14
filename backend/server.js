const connectDB=require("./config/db");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.get("/", (req, res) => {
  res.json({
    message: "GiftBloom API is running"
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`GiftBloom Server running on port ${PORT}`);
});
