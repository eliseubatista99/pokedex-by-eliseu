import {
  APP_PADDING_BOTTOM,
  APP_PADDING_LEFT,
  APP_PADDING_RIGHT,
  APP_PADDING_TOP,
} from "@constants";
import { CSSProperties } from "react";

export interface AppScreenProps {
  children?: React.ReactNode;
  styles?: CSSProperties;
}

export const AppScreen = ({ children, styles }: AppScreenProps) => {
  return (
    <div
      data-testid="app-screen"
      style={{
        width: "100%",
        height: "fit-content",
        alignItems: "center",
        padding: `${APP_PADDING_TOP}px ${APP_PADDING_RIGHT}px ${APP_PADDING_BOTTOM}px ${APP_PADDING_LEFT}px`,
        flex: 1,
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
