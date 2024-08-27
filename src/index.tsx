import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// intl-tel-input
import "intl-tel-input/build/css/intlTelInput.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
