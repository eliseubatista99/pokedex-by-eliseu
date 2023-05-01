import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { css, Global } from "@emotion/react";
import { AuthProvider } from "@contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            html,
            body {
              width: 100%;
              height: 100%;
              font-family: "Poppins", sans-serif;
            }

            #root {
              width: 100%;
              height: 100%;
            }

            div {
              display: flex;
              flex-direction: column;
            }

            p {
              color: inherit;
            }
          `}
        />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
