import { CSSProperties } from "react";

export interface CustomImageProps {
  src: string;
  alt: string;
  onPointerDown?: () => void;
  containerStyles?: CSSProperties;
  imageStyles?: CSSProperties;
}

export const CustomImage = ({
  src,
  alt,
  onPointerDown,
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
      onPointerDown={() => onPointerDown?.()}
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
