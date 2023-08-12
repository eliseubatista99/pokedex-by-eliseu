import { Typography } from "@components";
import { css, Global } from "@emotion/react";
import { LoadingState } from "@store";

export const GlobalLoader = ({
  loadingText,
  style,
}: Omit<LoadingState, "isLoading">) => {
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
            border-color: #cd3131;
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
          minHeight: "100%",
          left: 0,
          top: 0,
          background: style === "opaque" ? "#000029" : "#00000068",
          position: "fixed",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <span className="globalLoader"></span>
        {loadingText && (
          <Typography
            styles={{ width: "100%", color: "#ffffff", textAlign: "center" }}
          >
            {loadingText}
          </Typography>
        )}
      </div>
    </>
  );
};
