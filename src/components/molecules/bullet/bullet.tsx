import { Typography } from "@components";

export interface BulletProps {
  leftContent?: React.ReactNode;
  text: string;
  description?: string;
}

export const Bullet = ({ leftContent, text, description }: BulletProps) => {
  return (
    <div style={{ width: "100%", flexDirection: "row", gap: "8px" }}>
      {leftContent}
      <div style={{ flex: 1, flexDirection: "column", gap: "4px" }}>
        <Typography>{text}</Typography>
        <Typography styles={{ color: "#a7a7a7" }}>{description}</Typography>
      </div>
    </div>
  );
};
