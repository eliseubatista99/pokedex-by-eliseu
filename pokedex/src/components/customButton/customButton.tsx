import { CSSProperties } from "react";
import { useHover } from "../../hooks";

type CustomButtonAppearance = "primary" | "secondary";
type CustomButtonSize = "large" | "medium" | "small";

export interface CustomButtonProps {
  text?: string;
  appearance?: CustomButtonAppearance;
  size?: CustomButtonSize;
  startContent?: React.ReactNode;
  middleContent?: React.ReactNode | string;
  endContent?: React.ReactNode;
  containerProps?: CSSProperties;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  appearance = "primary",
  size = "large",
  startContent,
  middleContent,
  endContent,
  containerProps,
}) => {
  const customButtonHover = useHover();

  const getStyle = (): CSSProperties => {
    switch (appearance) {
      case "secondary":
        return {
          background: "#FFFFFF00",
          border: "2px solid #DBDCDD",
        };
      default:
        return {
          background: "#173EA5",
        };
    }
  };

  const getSize = (): CSSProperties => {
    switch (size) {
      case "small":
        return {
          maxWidth: "150px",
        };
      case "medium":
        return {
          maxWidth: "225px",
        };
      default:
        return {
          maxWidth: "328px",
        };
    }
  };

  const getHoveredStyle = (): CSSProperties => {
    switch (appearance) {
      case "secondary":
        return {
          background: "#FFFFFF10",
          border: "2px solid #000000",
          color: "#000000",
        };
      default:
        return {
          background: "#15358d",
          color: "#FFFFFF",
        };
    }
  };

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        padding: "17px",
        borderRadius: "50px",
        width: "80%",
        ...getSize(),
        ...getStyle(),
        ...getHoveredStyle(),
        ...containerProps,
      }}
      onPointerEnter={customButtonHover.hover}
      onPointerLeave={customButtonHover.unhover}
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
