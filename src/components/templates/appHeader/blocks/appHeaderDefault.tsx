import { ImageAssets } from "@assets";
import { useAppHeaderHelper } from "../appHeader.hook";
import { AppHeaderDefaultProps } from "..";
import { Iconography } from "@components";

export const AppHeaderDefault = ({
  hideBack,
  title,
  rightContent,
}: AppHeaderDefaultProps) => {
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
      {!hideBack && (
        <Iconography.NavLeft
          containerProps={{
            width: "38px",
            height: "38px",
            position: "absolute",
            left: "16px",
            cursor: "pointer",
          }}
          onClick={() => onClickBack()}
        />
      )}

      {title && (
        <p
          style={{
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          {title}
        </p>
      )}

      {rightContent && (
        <div
          style={{
            height: "100%",
            position: "absolute",
            right: "16px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {rightContent}
        </div>
      )}
    </div>
  );
};
