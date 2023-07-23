import { useAppHeaderHelper } from "../appHeader.hook";
import { AppHeaderDetailsProps } from "..";
import { Iconography } from "@components";

export const AppHeaderDetails = (props: AppHeaderDetailsProps) => {
  const { onPointerDownFavorite, theme = "light" } = props;
  const { onPointerDownBack } = useAppHeaderHelper(props);

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
        onPointerDown={() => onPointerDownBack()}
      />

      <Iconography.Favorite
        containerProps={{
          width: "25px",
          height: "25px",
          position: "absolute",
          right: "16px",
          cursor: "pointer",
        }}
        stroke={theme === "light" ? "#000000" : "#ffffff"}
        onPointerDown={() => onPointerDownFavorite?.()}
      />
    </div>
  );
};
