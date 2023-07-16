import { CSSProperties } from "react";

export interface TypographyProps {
  children?: React.ReactNode;
  styles?: CSSProperties;
}

export const Typography = ({ children, styles }: TypographyProps) => {
  return (
    <p
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        ...styles,
      }}
    >
      {children}
    </p>
  );
};
