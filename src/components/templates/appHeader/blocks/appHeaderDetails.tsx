import { ImageAssets } from "@assets";
import { useAppHeaderHelper } from "../appHeader.hook";
import { AppHeaderDetailsProps } from "..";
import { Iconography } from "@components";

export const AppHeaderDetails = ({
  onClickFavorite,
  theme,
}: AppHeaderDetailsProps) => {
  const { onClickBack } = useAppHeaderHelper();

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

      <Iconography.NavLeft
        containerProps={{
          width: "38px",
          height: "38px",
          position: "absolute",
          right: "16px",
          cursor: "pointer",
        }}
        stroke={theme === "light" ? "#000000" : "#ffffff"}
        onClick={() => onClickFavorite()}
      />
    </div>
  );
};