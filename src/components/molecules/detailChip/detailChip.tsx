import { CSSProperties } from "react";
import { CustomImage, Typography } from "@components";

export interface DetailChipProps {
  icon?: string;
  title?: string;
  content: string;
  styles?: CSSProperties;
}

export const DetailChip = ({
  icon,
  title,
  content,
  styles,
}: DetailChipProps) => {
  return (
    <div style={{ flexDirection: "column", ...styles }}>
      <div style={{ width: "100%", flexDirection: "row" }}>
        {icon && <CustomImage src={icon} />}
        {title && (
          <Typography
            styles={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#00000099",
            }}
          >
            {title}
          </Typography>
        )}
      </div>
      <div
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "15px",
          border: "1px solid rgba(0, 0, 0, 0.10)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography styles={{ fontSize: "18px", textAlign: "center" }}>
          {content}
        </Typography>
      </div>
    </div>
  );
};
