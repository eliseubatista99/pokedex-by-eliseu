import React from "react";
import { CSSProperties } from "react";

export type TypographySize =
  | "body_12"
  | "body_14"
  | "body_18"
  | "headline_26"
  | "subtitle";

export type TypographyColor = "primary" | "secondary" | "info" | "error";

export type TypographyWeight =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold";

export interface TypographyProps {
  size?: TypographySize;
  color?: TypographyColor;
  weight?: TypographyWeight;
  children?: React.ReactNode;
  containerProps?: CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  size: appearance = "body_14",
  color = "primary",
  weight = "regular",
  children,
  containerProps,
}) => {
  const sizeStyle = React.useMemo((): CSSProperties => {
    switch (appearance) {
      case "body_12":
        return {
          fontSize: "12px",
          lineHeight: 1.5,
        };
      case "body_18":
        return {
          fontSize: "18px",
          lineHeight: 1.5,
        };
      case "headline_26":
        return {
          fontSize: "26px",
          lineHeight: "39px",
        };
      case "subtitle":
        return {
          fontSize: "20px",
          lineHeight: "39px",
        };
      default:
        return {
          fontSize: "14px",
          lineHeight: 1.5,
        };
    }
  }, [appearance]);

  const colorStyle = React.useMemo((): CSSProperties => {
    switch (color) {
      case "secondary":
        return {
          color: "#666666",
        };
      case "info":
        return {
          color: "#4D4D4D",
        };
      case "error":
        return {
          fontFamily: "PoppinsSemiBold",
          color: "#a51717",
        };
      default:
        return {
          color: "#000000",
        };
    }
  }, [color]);

  const weightStyle = React.useMemo((): CSSProperties => {
    switch (weight) {
      case "thin":
        return {
          fontFamily: "PoppinsThin",
        };
      case "extra-light":
        return {
          fontFamily: "PoppinsExtraLight",
        };
      case "light": {
        return {
          fontFamily: "PoppinsLight",
        };
      }
      case "medium": {
        return {
          fontFamily: "PoppinsMedium",
        };
      }
      case "semi-bold":
        return {
          fontFamily: "PoppinsSemiBold",
        };
      case "bold":
        return {
          fontFamily: "PoppinsBold",
        };
      case "extra-bold":
        return {
          fontFamily: "PoppinsExtraBold",
        };
      default:
        return {
          fontFamily: "Poppins",
        };
    }
  }, [weight]);

  return (
    <div
      style={{
        overflow: "hidden",
        textAlign: "left",
        color: "#000000",
        fontFamily: "Poppins",
        ...sizeStyle,
        ...weightStyle,
        ...colorStyle,
        ...containerProps,
      }}
    >
      {children}
    </div>
  );
};
