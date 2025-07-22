import { FirebaseAppHelper } from "@eliseubatista99/react-scaffold-firebase";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProviders } from "./appProviders";
import { firebaseConfig } from "./configs";
import "./index.css";

FirebaseAppHelper.initializeApp(firebaseConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
