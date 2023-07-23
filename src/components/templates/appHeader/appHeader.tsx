import { AppHeaderDefault, AppHeaderDetails } from "./blocks";
import { AppHeaderPokedex } from "./blocks/appHeaderPokedex";

export type AppHeaderCommonProps = {
  stepsToGoBack?: number;
};

export type AppHeaderDefaultProps = AppHeaderCommonProps & {
  type: "default";
  title?: string;
  hideBack?: boolean;
  rightContent?: React.ReactNode;
};

export type AppHeaderDetailsProps = AppHeaderCommonProps & {
  type: "details";
  theme?: "light" | "dark";
  onClickFavorite?: () => void;
};

export type AppHeaderPokedexProps = AppHeaderCommonProps & {
  type: "pokedex";
  title?: string;
  hideBack?: boolean;
};

export type AppHeaderProps =
  | AppHeaderDefaultProps
  | AppHeaderDetailsProps
  | AppHeaderPokedexProps;

export const AppHeader = (props: AppHeaderProps) => {
  const maskTopScroll = (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "-5px",
        left: 0,
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
        position: "sticky",
        background: "#ffffff",
        top: "0px",
        zIndex: 100,
      }}
    >
      {maskTopScroll}
      {props.type === "default" && <AppHeaderDefault {...props} />}
      {props.type === "details" && <AppHeaderDetails {...props} />}
      {props.type === "pokedex" && <AppHeaderPokedex {...props} />}
    </div>
  );
};
