import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function placeOrder(e) {
    e.preventDefault();
    alert("Order placed successfully 🎉");
    dispatch(clearCart());
    navigate("/");
  }

  return (
    <div className="checkout">
      <h3>Order Summary</h3>

      {items.map((item) => (
        <p key={item.id}>
          {item.title} × {item.quantity} = ₹
          {item.price * item.quantity}
        </p>
      ))}

      <h4>
        Total: ₹
        {items.reduce(
          (t, i) => t + i.price * i.quantity,
          0
        )}
      </h4>

      <form onSubmit={placeOrder}>
        <input placeholder="Full Name" required />
        <input placeholder="Address" required />
        <button>Place Order</button>
      </form>
    </div>
  );
}
