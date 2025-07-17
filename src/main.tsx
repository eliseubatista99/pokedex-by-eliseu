import { FirebaseAppHelper } from "@eliseubatista99/react-scaffold-firebase";
import { css, Global } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { firebaseConfig } from "./configs";
import { PokedexFirebaseAuthProvider } from "./contexts";
import "./index.css";

FirebaseAppHelper.initializeApp(firebaseConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          user-select: none;
        }

        html {
          width: 100%;
          height: 100%;
          display: flex;
          font-family: "Poppins", sans-serif;
          overflow: initial;
          overflow-x: hidden;
          overflow-y: auto;
        }

        body {
          width: 100%;
          height: 100%;
          display: flex;
          background: #ededed;
          flex-direction: column;
          margin: auto;
        }

        #app {
          zoom: 1;
        }

        #root {
          width: 100%;
          min-height: 100%;
        }

        div {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        p {
          color: inherit;
          font-size: 16px;
          font-style: normal;
          line-height: normal;
          font-family: Poppins;
          width: fit-content;
          height: fit-content;
        }
      `}
    />
    <PokedexFirebaseAuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokedexFirebaseAuthProvider>
  </StrictMode>
);
