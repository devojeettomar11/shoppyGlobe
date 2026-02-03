import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({ dark, setDark }) {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
      <h2>ShoppyGlobe</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>

        <button
          className="dark-toggle"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
