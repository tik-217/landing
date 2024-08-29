// react
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./components/App/App";

// styles
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
