import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(data => setProducts(data.products))
      .catch(err => setError(err.message));
  }, []);

  return { products, error };
}
