import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider/AuthProvider.jsx";
import LangProvider from "./context/LangProvider/LangProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <LangProvider>
      <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
    </LangProvider>
  </>
);
