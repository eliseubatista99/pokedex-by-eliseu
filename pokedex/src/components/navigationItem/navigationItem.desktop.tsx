import { NavigationItemProps } from ".";
import { Typography } from "../typography";

export const NavigationItemDesktop = ({
  text,
  icon,
  isSelected,
  onClick,
  containerProps,
}: NavigationItemProps) => {
  return (
    <div
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "15px",
        boxShadow: isSelected
          ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          : "none",
        ...containerProps,
      }}
      onClick={onClick}
    >
      <div
        style={{
          filter: isSelected ? "none" : "grayscale(100%)",
          zoom: isSelected ? "1.5" : "1.3",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <Typography
        size="body_18"
        color="link"
        weight="medium"
        containerProps={{
          display: isSelected ? "flex" : "none",
          margin: "0 0 0 10px",
        }}
      >
        {text}
      </Typography>
    </div>
  );
};
