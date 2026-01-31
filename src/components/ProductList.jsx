import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { setSearch } from "../store/cartSlice";

export default function ProductList() {
  const { products, error } = useFetchProducts();
  const search = useSelector(state => state.cart.search);
  const dispatch = useDispatch();

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <input
        className="search"
        placeholder="Search products..."
        onChange={e => dispatch(setSearch(e.target.value))}
      />

      <div className="grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
