const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;

  if (!name || !price || !description || !stock) {
    return res.status(400).json({ message: "All fields required" });
  }

  const product = await Product.create({
    name,
    price,
    description,
    stock
  });

  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};
