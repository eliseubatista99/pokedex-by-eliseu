import { Property } from "csstype";
import { CSSProperties } from "react";
import { Icons } from "./icons";

export interface IconographyProps {
  width?: Property.Width;
  height?: Property.Height;
  fill?: Property.Fill;
  stroke?: Property.Stroke;
  onClick?: () => void;
  containerProps?: CSSProperties;
}

export const Iconography = {
  ...Icons,
};
