import type { IconographyProps } from "..";

export const ArrowRight = ({
  width = "38px",
  height = "38px",
  fill,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stroke,
  containerProps,
  onClick,
}: IconographyProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 28"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...containerProps,
      }}
      onClick={onClick}
    >
      <path
        d="M17.999 13.5017L6.74902 13.5017"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.499 19.1267L19.124 13.5017"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.499 7.87634L19.124 13.5013"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
