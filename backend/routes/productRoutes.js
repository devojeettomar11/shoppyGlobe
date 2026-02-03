const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById
} = require("../controllers/productController");

// CREATE product
router.post("/", createProduct);

// GET all products
router.get("/", getProducts);

// GET product by id
router.get("/:id", getProductById);

module.exports = router;
