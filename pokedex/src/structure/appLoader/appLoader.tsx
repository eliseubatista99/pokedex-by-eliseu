import { CSSProperties } from "react";
import { Property } from "csstype";
import "./appLoader.css";
import { ImageAssets } from "@assets";
import { css, Global } from "@emotion/react";
import { CustomImage, Typography } from "@components";

export interface AppLoaderProps {
  loaderStyle: "transparent" | "opaque";
  size?: Property.Width;
  loadingText?: string;
}

export const AppLoader = ({
  loaderStyle,
  size = "40px",
  loadingText,
}: AppLoaderProps) => {
  const getStyle = (): CSSProperties => {
    switch (loaderStyle) {
      case "opaque":
        return {
          background: "#000029",
        };
      default:
        return {
          background: "#00000099",
        };
    }
  };

  console.log("ZAU", ImageAssets.IconPokeball);

  const ballStyle: CSSProperties = {
    boxSizing: "content-box",
    width: size,
    height: size,
    position: "absolute",
    borderRadius: "50%",
    animation: "spinner-ball 1s linear infinite",
    animationDelay: "0s",
    background: "#e90c59",
    backgroundImage: `url(../../assets/images/icon-pokeball.png)`,
  };

  return (
    <>
      <Global
        styles={css`
          @keyframes spinner-ball-o {
            0% {
              opacity: 1;
              transform: translate(0 0);
            }

            49.99% {
              opacity: 1;
              transform: translate(80px, 0);
            }

            50% {
              opacity: 0;
              transform: translate(80px, 0);
            }

            100% {
              opacity: 0;
              transform: translate(0, 0);
            }
          }

          @keyframes spinner-ball {
            0% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(80px, 0);
            }

            100% {
              transform: translate(0, 0);
            }
          }
        `}
      />
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: 1000,
          ...getStyle(),
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: `calc(80px + ${size})`,
              height: size,
              margin: "0 auto",
              position: "relative",
            }}
          >
            <CustomImage
              src={ImageAssets.IconPokeball}
              alt={""}
              containerStyles={{
                ...ballStyle,
                animationDelay: "-0.5s",
                //background: `url(${ImageAssets.IconPokeball})`,
              }}
            />
            <CustomImage
              src={ImageAssets.IconPokeballBlue}
              alt={""}
              containerStyles={{
                ...ballStyle,
              }}
            />
            <CustomImage
              src={ImageAssets.IconPokeball}
              alt={""}
              containerStyles={{
                ...ballStyle,
                animationDelay: "-0.5s",
                animation: "spinner-ball-o 1s linear infinite",
              }}
            />
          </div>
          {loadingText && (
            <Typography
              size="subtitle"
              weight="semi-bold"
              color="primary-dark"
              containerProps={{
                margin: "30px auto 0 auto",
                maxWidth: "70%",
                textAlign: "center",
                lineHeight: "30px",
              }}
            >
              {loadingText}
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};
