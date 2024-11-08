import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { css, Global } from "@emotion/react";
import { FirebaseAuthProvider } from "./contexts/firebaseAuth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
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
    <FirebaseAuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
