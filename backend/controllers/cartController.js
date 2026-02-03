const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ADD TO CART
exports.addToCart = async (req, res) => {
  res.json({ message: "addToCart working" });
};

// GET CART
exports.getCart = async (req, res) => {
  res.json({ message: "getCart working" });
};

// UPDATE CART
exports.updateCart = async (req, res) => {
  res.json({ message: "updateCart working" });
};

// DELETE CART
exports.removeFromCart = async (req, res) => {
  res.json({ message: "removeFromCart working" });
};
