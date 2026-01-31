import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(setProduct)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail">
      <img loading="lazy" src={product.thumbnail} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
    </div>
  );
}
