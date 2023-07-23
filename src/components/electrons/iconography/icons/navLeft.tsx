import { IconographyProps } from "..";

export const NavLeft = ({
  width = "38px",
  height = "38px",
  fill = "none",
  stroke = "#000000",
  containerProps,
  onPointerDown,
}: IconographyProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...containerProps }}
      onPointerDown={onPointerDown}
    >
      <path
        d="M22.1665 12.6667L15.8332 19.0001L22.1665 25.3334"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
