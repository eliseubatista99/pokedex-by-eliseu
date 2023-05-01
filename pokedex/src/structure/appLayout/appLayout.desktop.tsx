import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutDesktop = ({
  withoutNavigation,
  screenContainerProps,
  topContent,
  bottomContent,
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
      {!withoutNavigation && <AppNavigation />}
      <div>
        {topContent && (
          <div style={{ width: "100%", margin: "0 auto 0 auto" }}>
            {topContent}
          </div>
        )}
        <div style={{ width: "100%", flex: 1, ...screenContainerProps }}>
          {children}
        </div>
        {bottomContent && (
          <div style={{ width: "100%", margin: "auto auto 0 auto" }}>
            {bottomContent}
          </div>
        )}
      </div>
    </div>
  );
};
