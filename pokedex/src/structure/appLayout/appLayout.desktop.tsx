import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutDesktop = ({
  withoutNavigation,
  children,
}: AppLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        position: "relative",
        gridTemplateColumns: withoutNavigation ? "1fr" : "0.22fr 0.78fr",
      }}
    >
      {!withoutNavigation && <AppNavigation />}
      <div style={{ width: "100%", flex: 1 }}>{children}</div>
    </div>
  );
};
