import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
        />
        <h3>Your cart is empty</h3>
        <Link to="/">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3 className="total">
        Total: ₹
        {items.reduce(
          (t, i) => t + i.price * i.quantity,
          0
        )}
      </h3>

      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}
