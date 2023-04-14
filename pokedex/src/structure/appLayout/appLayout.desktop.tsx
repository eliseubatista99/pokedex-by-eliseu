import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutDesktop = ({
  withoutNavigation,
  screenContainerProps,
  topContent,
  children,
}: AppLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        position: "relative",
        zoom: 0.9,
        gridTemplateColumns: withoutNavigation ? "1fr" : "0.22fr 0.78fr",
      }}
    >
      {topContent && <>{topContent}</>}

      {!withoutNavigation && <AppNavigation />}
      <div style={{ width: "100%", flex: 1, ...screenContainerProps }}>
        {children}
      </div>
    </div>
  );
};
