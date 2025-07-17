import { Iconography, Typography } from "@components";
import { type AppHeaderPokedexProps } from "..";
import { useAppHeaderHelper } from "../appHeader.hook";

export const AppHeaderPokedex = (props: AppHeaderPokedexProps) => {
  const { hideBack = true, title } = props;

  const { onClickBack } = useAppHeaderHelper(props);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        zIndex: 1,
        flexDirection: "row",
        gap: "16px",
      }}
    >
      {!hideBack && (
        <Iconography.NavLeft
          containerProps={{
            width: "38px",
            height: "38px",
            cursor: "pointer",
          }}
          onClick={() => onClickBack()}
        />
      )}

      {title && (
        <Typography
          styles={{
            width: "100%",
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      )}
    </div>
  );
};
