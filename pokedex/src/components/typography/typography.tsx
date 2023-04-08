import { CSSProperties } from "react";

export type TypographyAppearance =
  | "headline_100"
  | "headline_200"
  | "subtitle"
  | "body_primary"
  | "body_secondary";

export interface TypographyProps {
  appearance?: TypographyAppearance;
  children?: React.ReactNode;
  containerProps?: CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  appearance = "body",
  children,
  containerProps,
}) => {
  const getStyle = (): CSSProperties => {
    switch (appearance) {
      case "body_secondary":
        return {
          fontSize: "14px",
          lineHeight: 1.5,
          color: "#666666",
          fontFamily: "Poppins",
        };
      case "headline_100":
        return {
          fontSize: "26px",
          lineHeight: "39px",
          fontFamily: "PoppinsMedium",
        };
      case "headline_200":
        return {
          fontSize: "26px",
          lineHeight: "39px",
          fontFamily: "PoppinsSemiBold",
        };
      case "subtitle":
        return {
          fontSize: "20px",
          lineHeight: "39px",
          fontFamily: "PoppinsSemiBold",
        };
      default:
        return {
          fontSize: "14px",
          lineHeight: 1.5,
          fontFamily: "Poppins",
        };
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        textAlign: "left",
        color: "#000000",
        ...getStyle(),
        ...containerProps,
      }}
    >
      {children}
    </div>
  );
};
