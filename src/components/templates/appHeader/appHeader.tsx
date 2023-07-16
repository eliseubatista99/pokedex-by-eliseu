import { AppHeaderDefault, AppHeaderDetails } from "./blocks";

export type AppHeaderDefaultProps = {
  type: "default";
  title: string;
  hideBack?: boolean;
};

export type AppHeaderDetailsProps = {
  type: "details";
  theme: "light" | "dark";
  onClickFavorite: () => void;
};

export type AppHeaderProps = AppHeaderDefaultProps | AppHeaderDetailsProps;

export const AppHeader = (props: AppHeaderProps) => {
  const maskTopScroll = (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "-5px",
        height: "100%",
        background: "#ffffff",
        zIndex: 0,
      }}
    />
  );

  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        padding: "16px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 0",
        position: "sticky",
        background: "#ffffff",
        top: "0px",
        zIndex: 100,
      }}
    >
      {maskTopScroll}
      {props.type === "default" && <AppHeaderDefault {...props} />}
      {props.type === "details" && <AppHeaderDetails {...props} />}
    </div>
  );
};
