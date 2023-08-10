import { useAppHeaderHelper } from "../appHeader.hook";
import { AppHeaderDetailsProps } from "..";
import { Iconography } from "@components";

export const AppHeaderDetails = (props: AppHeaderDetailsProps) => {
  const { onClickFavorite, theme = "light" } = props;
  const { onClickBack } = useAppHeaderHelper(props);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Iconography.NavLeft
        containerProps={{
          width: "28.5px",
          height: "28.5px",
          position: "absolute",
          left: "12px",
          cursor: "pointer",
        }}
        stroke={theme === "light" ? "#000000" : "#ffffff"}
        onClick={() => onClickBack()}
      />

      <Iconography.Favorite
        containerProps={{
          width: "18.75px",
          height: "18.75px",
          position: "absolute",
          right: "18px",
          cursor: "pointer",
        }}
        stroke={theme === "light" ? "#000000" : "#ffffff"}
        onClick={() => onClickFavorite?.()}
      />
    </div>
  );
};
