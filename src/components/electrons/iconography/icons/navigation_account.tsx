import type { IconographyProps } from "..";

export const NavigationAccount = ({
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
      <rect
        x="8.57153"
        y="21.4287"
        width="12.8571"
        height="4.28571"
        rx="2.14286"
        fill="#CD3131"
      />
      <path
        d="M22.9549 7.04505C27.3483 11.4384 27.3483 18.5616 22.9549 22.9549C18.5615 27.3483 11.4384 27.3483 7.04505 22.9549C2.65165 18.5615 2.65165 11.4384 7.04505 7.04505C11.4384 2.65165 18.5616 2.65165 22.9549 7.04505"
        stroke="#173EA5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.487 10.4049C18.8602 11.7781 18.8602 14.0044 17.487 15.3776C16.1138 16.7508 13.8874 16.7508 12.5143 15.3776C11.1411 14.0044 11.1411 11.7781 12.5143 10.4049C13.8874 9.03171 16.1138 9.03171 17.487 10.4049Z"
        fill="#173EA5"
      />
      <path
        d="M17.487 10.4049C18.8602 11.7781 18.8602 14.0044 17.487 15.3776C16.1138 16.7508 13.8874 16.7508 12.5143 15.3776C11.1411 14.0044 11.1411 11.7781 12.5143 10.4049C13.8874 9.03171 16.1138 9.03171 17.487 10.4049"
        stroke="#173EA5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 23.6988C20.7062 21.81 17.81 20.625 15 20.625C12.19 20.625 9.65996 21.8088 7.86621 23.6988"
        stroke="#173EA5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
