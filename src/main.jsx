import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./page/dashboard/App";
import AppContextProvider from "./context/AppContext";
import Login from "./page/login/login";

function Main() {
  console.log(2);
  return <Login />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  </StrictMode>
);
