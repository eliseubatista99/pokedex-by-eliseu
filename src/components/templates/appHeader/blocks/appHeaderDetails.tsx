import { Iconography } from "@components";
import { type AppHeaderDetailsProps } from "..";
import { useAppHeaderHelper } from "../appHeader.hook";

export const AppHeaderDetails = (props: AppHeaderDetailsProps) => {
  const { favorite, theme = "light" } = props;
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
          width: "38px",
          height: "38px",
          position: "absolute",
          left: "16px",
          cursor: "pointer",
        }}
        stroke={theme === "light" ? "#000000" : "#ffffff"}
        onClick={() => onClickBack()}
      />

      {favorite && (
        <Iconography.Favorite
          containerProps={{
            width: "25px",
            height: "25px",
            position: "absolute",
            right: "24px",
            cursor: "pointer",
          }}
          fill={favorite.isFavorite ? "#ff0062" : undefined}
          stroke={theme === "light" ? "#000000" : "#ffffff"}
          onClick={() => favorite.onClickFavorite?.()}
        />
      )}
    </div>
  );
};
