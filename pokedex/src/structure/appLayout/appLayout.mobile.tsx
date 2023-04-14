import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutMobile = ({
  withoutNavigation,
  topContent,
  screenContainerProps,
  children,
}: AppLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {topContent && <>{topContent}</>}
      <div style={{ width: "100%", flex: 1, ...screenContainerProps }}>
        {children}
      </div>
      {!withoutNavigation && <AppNavigation />}
    </div>
  );
};
