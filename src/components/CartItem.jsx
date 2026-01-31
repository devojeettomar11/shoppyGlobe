import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* LEFT: IMAGE */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="cart-img"
        loading="lazy"
      />

      {/* MIDDLE: DETAILS */}
      <div className="cart-details">
        <h4>{item.title}</h4>
        <p className="price">₹ {item.price}</p>

        <div className="qty">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  qty: Number(e.target.value),
                })
              )
            }
          />
        </div>

        <p className="subtotal">
          Subtotal: ₹ {item.price * item.quantity}
        </p>
      </div>

      {/* RIGHT: REMOVE */}
      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}
