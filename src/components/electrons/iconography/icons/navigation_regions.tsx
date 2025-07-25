import type { IconographyProps } from "..";

export const NavigationRegions = ({
  width = "24px",
  height = "24px",
  fill = "none",
  containerProps,
  onClick,
}: IconographyProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
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
        d="M13 24.9163C3.79167 16.7913 4.33333 14.6247 3.25 10.833H22.75C22.75 15.708 18.4167 21.6663 13 24.9163Z"
        fill="white"
      />
      <path
        d="M22.75 10.833H3.25C3.43056 7.94412 5.41667 1.62467 13 1.08301C20.0417 1.08301 22.5694 7.58301 22.75 10.833Z"
        fill="#CD3131"
      />
      <circle cx="13" cy="10.833" r="3.25" fill="white" />
      <path
        d="M22.75 10.833C22.75 18.4163 13 24.9163 13 24.9163C13 24.9163 3.25 18.4163 3.25 10.833C3.25 8.24715 4.27723 5.7672 6.10571 3.93872C7.93419 2.11024 10.4141 1.08301 13 1.08301C15.5859 1.08301 18.0658 2.11024 19.8943 3.93872C21.7228 5.7672 22.75 8.24715 22.75 10.833Z"
        stroke="#173EA5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 14.083C13.862 14.083 14.6886 13.7406 15.2981 13.1311C15.9076 12.5216 16.25 11.695 16.25 10.833C16.25 9.97105 15.9076 9.1444 15.2981 8.53491C14.6886 7.92542 13.862 7.58301 13 7.58301C12.138 7.58301 11.3114 7.92542 10.7019 8.53491C10.0924 9.1444 9.75 9.97105 9.75 10.833C9.75 11.695 10.0924 12.5216 10.7019 13.1311C11.3114 13.7406 12.138 14.083 13 14.083Z"
        fill="white"
        stroke="#173EA5"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25 10.833L10.075 10.833M15.925 10.833L22.75 10.833"
        stroke="#173EA5"
        strokeWidth="1.625"
      />
    </svg>
  );
};
