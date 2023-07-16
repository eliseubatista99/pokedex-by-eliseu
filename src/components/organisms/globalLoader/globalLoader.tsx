import { APP_MAX_WIDTH } from "@constants";
import { css, Global } from "@emotion/react";

export const GlobalLoader = () => {
  return (
    <>
      <Global
        styles={css`
          .globalLoader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            position: relative;
            animation: rotate 1s linear infinite;
            margin: auto;
          }
          .globalLoader::before,
          .globalLoader::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            inset: 0px;
            border-radius: 50%;
            border: 5px solid #fff;
            animation: prixClipFix 2s linear infinite;
          }
          .globalLoader::after {
            inset: 8px;
            transform: rotate3d(90, 90, 0, 180deg);
            border-color: #3e56df;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes prixClipFix {
            0% {
              clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
            }
            50% {
              clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
            }
            75%,
            100% {
              clip-path: polygon(
                50% 50%,
                0 0,
                100% 0,
                100% 100%,
                100% 100%,
                100% 100%
              );
            }
          }
        `}
      />
      <div
        style={{
          width: "100%",
          maxWidth: `${APP_MAX_WIDTH}px`,
          height: "100vh",
          maxHeight: "90%",
          background: "#00000068",
          position: "fixed",
          zIndex: 1000,
        }}
      >
        <span className="globalLoader"></span>
      </div>
    </>
  );
};
