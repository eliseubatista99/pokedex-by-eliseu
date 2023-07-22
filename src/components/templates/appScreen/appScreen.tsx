import { CSSProperties } from "react";

export interface AppScreenProps {
  children?: React.ReactNode;
  styles?: CSSProperties;
}

export const AppScreen = ({ children, styles }: AppScreenProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        alignItems: "center",
        padding: "10px 10px 30px 10px",
        flex: 1,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
