import React, { Suspense, useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <Suspense fallback={<p className="loading">Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
