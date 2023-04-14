import { useHover } from "@hooks";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { CSSProperties } from "react";

type CustomButtonAppearance = "primary" | "secondary";
type CustomButtonSize = "large" | "medium" | "small";

export interface CustomButtonProps {
  appearance?: CustomButtonAppearance;
  size?: CustomButtonSize;
  startContent?: React.ReactNode;
  middleContent?: React.ReactNode | string;
  endContent?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  containerProps?: CSSProperties;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  appearance = "primary",
  size = "large",
  startContent,
  middleContent,
  endContent,
  isDisabled,
  onClick,
  containerProps,
}) => {
  const customButtonHover = useHover();

  const getStyle = (): CSSProperties => {
    switch (appearance) {
      case "secondary":
        return {
          background: "#FFFFFF00",
          border: "2px solid #DBDCDD",
          color: "#000000",
        };
      default:
        return {
          background: "#173EA5",
          color: "#FFFFFF",
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
    if (!customButtonHover.isHovered) {
      return {};
    }

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

  const getDisabledStyle = (): CSSProperties => {
    return isDisabled
      ? {
          pointerEvents: "none",
          filter: "grayscale(100%)",
        }
      : {};
  };

  return (
    <div
      style={{
        position: "relative",
        flexDirection: "row",
        cursor: "pointer",
        padding: "17px",
        borderRadius: "50px",
        width: "80%",
        userSelect: "none",
        ...getSize(),
        ...getStyle(),
        ...getHoveredStyle(),
        ...getDisabledStyle(),
        ...containerProps,
      }}
      onPointerEnter={customButtonHover.hover}
      onPointerLeave={customButtonHover.unhover}
      onClick={onClick}
    >
      <div
        style={{ width: "100%", position: "relative", ...getDisabledStyle() }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          {startContent}
        </div>
        <div style={{ width: "80%", margin: "0 auto" }}>
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
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
          }}
        >
          {endContent}
        </div>
      </div>
    </div>
  );
};
