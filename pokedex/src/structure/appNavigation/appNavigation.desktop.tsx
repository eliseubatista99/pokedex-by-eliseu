import { AppNavigationOutputProps } from "./appNavigation.hook";

export const AppNavigationDesktop = (props: AppNavigationOutputProps) => {
  return (
    <div style={{ width: "100%", height: "100%", padding: "10px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      ></div>
      <p>DESKTOP</p>
    </div>
  );
};
