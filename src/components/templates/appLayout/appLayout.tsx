import {
  AppHeader,
  AppHeaderProps,
  AppScreen,
  AppScreenProps,
  GlobalLoader,
  Toast,
} from "@components";
import { useScroll } from "@hooks";
import { useBaseStore } from "@store";
import React from "react";
import { CSSProperties } from "react";
export interface AppLayoutProps {
  header?: AppHeaderProps;
  screen?: AppScreenProps;
  bottomContent?: React.ReactNode;
  children?: React.ReactNode;
  styles?: CSSProperties;
}

export const AppLayout = ({
  header,
  screen,
  children,
  bottomContent,
  styles,
}: AppLayoutProps) => {
  const { loading, toast } = useBaseStore();
  const { enableScroll, disableScroll } = useScroll();

  React.useEffect(() => {
    if (loading?.isLoading) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [disableScroll, enableScroll, loading?.isLoading]);

  return (
    <>
      {loading && (
        <GlobalLoader loadingText={loading.loadingText} style={loading.style} />
      )}
      {toast && (
        <Toast
          duration={toast.duration || 3}
          icon={toast.icon}
          text={toast.text}
        />
      )}
      <div
        data-testid="app-layout"
        style={{
          width: "100%",
          flex: 1,
          margin: "auto",
          background: "#ffffff",
          position: "relative",
          ...styles,
        }}
      >
        {header && <AppHeader {...header} />}
        <AppScreen {...screen}>{children}</AppScreen>
        {bottomContent && (
          <div
            style={{
              position: "sticky",
              bottom: 0,
              width: "100%",
              zIndex: 100,
            }}
          >
            {bottomContent}
          </div>
        )}
      </div>
    </>
  );
};
