import { type CSSProperties } from "react";

export interface TypographyProps {
  overflowEllipsis?: boolean;
  children?: React.ReactNode;
  styles?: CSSProperties;
}

export const Typography = ({
  overflowEllipsis,
  children,
  styles,
}: TypographyProps) => {
  return (
    <p
      style={{
        maxWidth: "100%",
        overflow: "hidden",
        whiteSpace: overflowEllipsis ? "nowrap" : "normal",
        textOverflow: "ellipsis",
        fontSize: "16px",
        fontStyle: "normal",
        lineHeight: "normal",
        color: "inherit",
        ...styles,
      }}
    >
      {children}
    </p>
  );
};
