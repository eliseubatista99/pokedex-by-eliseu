import { CSSProperties } from "react";
import { Property } from "csstype";

export interface CustomImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
  containerStyles?: CSSProperties;
  imageStyles?: CSSProperties;
}

export const CustomImage = ({
  src,
  alt,
  onClick,
  containerStyles,
  imageStyles,
}: CustomImageProps) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        ...containerStyles,
      }}
      onClick={() => onClick?.()}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...imageStyles,
        }}
      />
    </div>
  );
};
