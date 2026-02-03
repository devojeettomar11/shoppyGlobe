import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);

  function handleAdd() {
    dispatch(addToCart(product));
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  }

  return (
    <div className="card">
      <img loading="lazy" src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      <div className="stars">⭐⭐⭐⭐☆</div>

      <Link to={`/product/${product.id}`}>View</Link>
      <button onClick={handleAdd}>Add to Cart</button>

      {toast && <div className="toast">Added to cart ✔</div>}
    </div>
  );
}
