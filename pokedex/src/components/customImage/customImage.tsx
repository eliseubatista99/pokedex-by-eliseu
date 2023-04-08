import { CSSProperties } from "react";
import { Property } from "csstype";

export interface CustomImageProps {
  src: string;
  alt: string;
  borderRadius?: string | number;
  mixBlendMode?: Property.MixBlendMode;
  imgStyles?: CSSProperties;
  containerStyles?: CSSProperties;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  borderRadius = 0,
  mixBlendMode = "normal",
  imgStyles,
  containerStyles,
}) => {
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
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: borderRadius,
          mixBlendMode: mixBlendMode || "multiply",
          ...imgStyles,
        }}
      />
    </div>
  );
};
