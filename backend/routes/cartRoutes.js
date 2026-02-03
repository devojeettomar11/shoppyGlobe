const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart
} = require("../controllers/cartController");

// 🔐 PROTECT ALL CART ROUTES
router.use(protect);   // ✅ THIS LINE GOES HERE

router.post("/", addToCart);
router.get("/", getCart);
router.put("/:id", updateCart);
router.delete("/:id", removeFromCart);

module.exports = router;
