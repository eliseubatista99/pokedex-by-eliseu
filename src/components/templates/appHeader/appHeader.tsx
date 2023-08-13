import { APP_HEADER_HEIGHT } from "@constants";
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
  favorite?: {
    isFavorite?: boolean;
    onClickFavorite?: () => void;
  };
  theme?: "light" | "dark";
};

export type AppHeaderPokedexProps = AppHeaderCommonProps & {
  type: "pokedex";
  title?: string;
  hideBack?: boolean;
};

type AppHeaderTypeProps =
  | AppHeaderDefaultProps
  | AppHeaderDetailsProps
  | AppHeaderPokedexProps;

export type AppHeaderProps = AppHeaderTypeProps & {
  background?: string;
};

export const AppHeader = (props: AppHeaderProps) => {
  const { background = "#ffffff" } = props;
  const maskTopScroll = (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "-5px",
        left: 0,
        height: "100%",
        background,
        zIndex: 0,
      }}
    />
  );

  return (
    <div
      style={{
        width: "100%",
        height: `${APP_HEADER_HEIGHT}px`,
        padding: "16px",
        position: props.type !== "details" ? "sticky" : "absolute",
        background,
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
