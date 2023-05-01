import { CSSProperties } from "react";

export interface CustomLinkProps {
  startContent?: React.ReactNode;
  middleContent?: React.ReactNode | string;
  endContent?: React.ReactNode;
  onClick?: () => void;
  containerProps?: CSSProperties;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  startContent,
  middleContent,
  endContent,
  onClick,
  containerProps,
}) => {
  return (
    <div
      style={{
        flexDirection: "row",
        position: "relative",
        cursor: "pointer",
        color: "#173EA5",
        alignItems: "center",
        ...containerProps,
      }}
      onClick={onClick}
    >
      {startContent}
      {typeof middleContent === "string" ? (
        <p
          style={{
            fontFamily: "PoppinsSemiBold",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
            color: "inherit",
          }}
        >
          {middleContent}
        </p>
      ) : (
        middleContent
      )}
      {endContent}
    </div>
  );
};
