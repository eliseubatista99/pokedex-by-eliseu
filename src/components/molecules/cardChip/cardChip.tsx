import { CustomImage, Typography } from "@components";
import { CSSProperties } from "react";

export interface CardChipProps {
  text: string;
  image?: string;
  styles?: CSSProperties;
}

export const CardChip = ({ text, image, styles }: CardChipProps) => {
  return (
    <div
      style={{
        flexDirection: "row",
        padding: "3px 6px",
        gap: "6px",
        borderRadius: "48px",
        ...styles,
      }}
    >
      {image && (
        <CustomImage
          src={image}
          alt={"Card Chip Icon"}
          imageStyles={{ width: "10px", height: "10px" }}
          containerStyles={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto 0",
          }}
        />
      )}
      <Typography styles={{ fontSize: "11px", margin: "auto 0 auto 0" }}>
        {text}
      </Typography>
    </div>
  );
};
