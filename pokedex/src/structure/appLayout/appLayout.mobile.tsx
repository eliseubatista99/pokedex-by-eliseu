import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutMobile = ({
  withoutNavigation,
  children,
}: AppLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", flex: 1 }}>{children}</div>
      {!withoutNavigation && <AppNavigation />}
    </div>
  );
};
