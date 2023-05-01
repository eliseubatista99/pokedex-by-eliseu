import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutMobile = ({
  withoutNavigation,
  topContent,
  bottomContent,
  screenContainerProps,
  children,
}: AppLayoutProps) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          zoom: 0.9,
          position: "relative",
        }}
      >
        {topContent && (
          <div style={{ width: "100%", margin: "auto auto 0 auto" }}>
            {topContent}
          </div>
        )}
        <div style={{ width: "100%", flex: 1, ...screenContainerProps }}>
          {children}
        </div>
        {bottomContent && (
          <div
            style={{
              width: "100%",
              margin: "auto auto 0 auto",
              padding: `0 0 ${withoutNavigation ? 0 : 72}px 0`,
            }}
          >
            {bottomContent}
          </div>
        )}
      </div>
      {!withoutNavigation && <AppNavigation />}
    </>
  );
};
