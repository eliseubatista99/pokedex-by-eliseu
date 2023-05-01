import { NavigationItemProps } from ".";
import { Typography } from "../typography";

export const NavigationItemMobile = ({
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
        size="body_12"
        color="link"
        weight="medium"
        containerProps={{ display: isSelected ? "flex" : "none" }}
      >
        {text}
      </Typography>
    </div>
  );
};
