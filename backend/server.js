const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// error handler (LAST)
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running on port 5000");
      console.log("MongoDB Connected");
    });
  })
  .catch(err => console.error(err));
