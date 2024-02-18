import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BlogContextComponent from "./context/BlogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogContextComponent>
      <App />
    </BlogContextComponent>
  </React.StrictMode>
);
