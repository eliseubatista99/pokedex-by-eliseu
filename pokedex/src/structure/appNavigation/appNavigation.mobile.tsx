import { AppNavigationOutputProps } from "./appNavigation.hook";

export const AppNavigationMobile = (props: AppNavigationOutputProps) => {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: "72px",
        borderTop: "1px solid #E6E6E6",
      }}
    >
      <p>MOBILE</p>
    </div>
  );
};
