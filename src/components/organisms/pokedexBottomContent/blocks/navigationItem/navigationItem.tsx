import { Typography } from "@eliseubatista99/react-scaffold-core";
import { type CSSProperties } from "react";

export interface NavigationItemProps {
  text: string;
  icon: string | React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  containerProps?: CSSProperties;
}

export const NavigationItem = ({
  text,
  icon,
  isSelected,
  onClick,
  containerProps,
}: NavigationItemProps) => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        ...containerProps,
      }}
      onClick={onClick}
    >
      <div
        style={{
          filter: isSelected ? "none" : "grayscale(100%)",
          zoom: isSelected ? "1.15" : "1",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <Typography
        styles={{
          fontSize: "12px",
          fontWeight: 500,
          color: "#173EA5",
          display: isSelected ? "flex" : "none",
        }}
      >
        {text}
      </Typography>
    </div>
  );
};
