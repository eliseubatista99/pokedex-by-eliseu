import { Property } from "csstype";
import { CSSProperties } from "react";
import { NavLeft, Apple, Google } from "./icons";

export interface IconographyProps {
  width?: Property.Width;
  height?: Property.Height;
  fill?: Property.Fill;
  stroke?: Property.Stroke;
  onClick?: () => void;
  containerProps?: CSSProperties;
}

export const Iconography = {
  NavLeft,
  Apple,
  Google,
};
