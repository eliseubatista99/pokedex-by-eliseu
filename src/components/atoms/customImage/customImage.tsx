import { CSSProperties } from "react";
import { Property } from "csstype";

export interface CustomImageProps {
  src: string;
  alt: string;
  styles?: CSSProperties;
}

export const CustomImage = ({ src, alt, styles }: CustomImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...styles,
      }}
    />
  );
};