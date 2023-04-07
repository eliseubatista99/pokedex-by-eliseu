import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutMobile = ({ children }: AppLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", flex: 1 }}>{children}</div>
      <AppNavigation />
    </div>
  );
};
