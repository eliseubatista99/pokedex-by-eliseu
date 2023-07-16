import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { css, Global } from "@emotion/react";

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
        }

        html {
          width: 100%;
          height: 100%;
          display: flex;
          font-family: "Poppins", sans-serif;
          overflow: hidden;
        }

        body {
          width: 100%;
          height: 100%;
          display: flex;
          background: #ededed;
          flex-direction: column;
          margin: auto;
          overflow: initial;
          overflow-x: hidden;
          overflow-y: auto;
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
        }

        @media only screen and (min-width: 769px) {
          body {
            max-height: 90%;
            max-width: 480px;
          }
        }
      `}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
