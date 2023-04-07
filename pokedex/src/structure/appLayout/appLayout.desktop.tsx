import { AppNavigation, AppLayoutProps } from "..";

export const AppLayoutDesktop = ({ children }: AppLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "0.2fr 0.8fr",
      }}
    >
      <div style={{ width: "100%", flex: 1 }}>{children}</div>
      <AppNavigation />
    </div>
  );
};
