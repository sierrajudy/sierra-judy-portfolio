import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Restore the path saved by public/404.html's GitHub Pages SPA redirect.
const redirect = sessionStorage.getItem("spa-redirect");
if (redirect) {
  sessionStorage.removeItem("spa-redirect");
  const target = import.meta.env.BASE_URL.replace(/\/$/, "") + redirect;
  if (target !== location.pathname + location.search + location.hash) {
    window.history.replaceState(null, "", target);
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
