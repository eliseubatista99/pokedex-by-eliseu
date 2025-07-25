import type { IconographyProps } from "..";

export const Favorite = ({
  width = "38px",
  height = "38px",
  fill = "none",
  stroke = "#000000",
  containerProps,
  onClick,
}: IconographyProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
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
        d="M24.3134 5.37851C23.7175 4.78235 23.01 4.30943 22.2313 3.98677C21.4526 3.66412 20.618 3.49805 19.7751 3.49805C18.9322 3.49805 18.0975 3.66412 17.3188 3.98677C16.5401 4.30943 15.8326 4.78235 15.2367 5.37851L14.0001 6.61518L12.7634 5.37851C11.5598 4.17487 9.92726 3.49867 8.22506 3.49867C6.52285 3.49867 4.89037 4.17487 3.68672 5.37851C2.48308 6.58215 1.80688 8.21464 1.80688 9.91684C1.80688 11.619 2.48308 13.2515 3.68672 14.4552L4.92339 15.6918L14.0001 24.7685L23.0767 15.6918L24.3134 14.4552C24.9096 13.8593 25.3825 13.1518 25.7051 12.3731C26.0278 11.5944 26.1939 10.7597 26.1939 9.91684C26.1939 9.07394 26.0278 8.2393 25.7051 7.4606C25.3825 6.68189 24.9096 5.97439 24.3134 5.37851V5.37851Z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
