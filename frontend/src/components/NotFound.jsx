import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>{error?.statusText || "Page not found"}</p>
    </div>
  );
}
