import { useAppHeaderHelper } from "../appHeader.hook";
import { AppHeaderDefaultProps } from "..";
import { Iconography, Typography } from "@components";

export const AppHeaderDefault = (props: AppHeaderDefaultProps) => {
  const { hideBack, title, rightContent } = props;

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
      {!hideBack && (
        <Iconography.NavLeft
          containerProps={{
            width: "28.5px",
            height: "28.5px",
            position: "absolute",
            left: "12px",
            cursor: "pointer",
          }}
          onClick={() => onClickBack()}
        />
      )}

      {title && (
        <Typography
          styles={{
            width: "100%",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      )}

      {rightContent && (
        <div
          style={{
            height: "100%",
            position: "absolute",
            right: "12px",
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
