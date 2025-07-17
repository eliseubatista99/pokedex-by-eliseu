import type { Property } from "csstype";
import { type CSSProperties } from "react";
import { Icons } from "./icons";

export type IconographyProps = {
  width?: Property.Width;
  height?: Property.Height;
  fill?: Property.Fill;
  stroke?: Property.Stroke;
  onClick?: () => void;
  containerProps?: CSSProperties;
};

export const Iconography = {
  ...Icons,
};
