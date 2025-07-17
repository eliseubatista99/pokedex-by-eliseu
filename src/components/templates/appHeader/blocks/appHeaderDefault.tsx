import { Iconography, Typography } from "@components";
import { type AppHeaderDefaultProps } from "..";
import { useAppHeaderHelper } from "../appHeader.hook";

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
