import { useAppHeaderHelper } from "../appHeader.hook";
import { AppHeaderPokedexProps } from "..";
import { Iconography, Typography } from "@components";

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
        gap: "12px",
      }}
    >
      {!hideBack && (
        <Iconography.NavLeft
          containerProps={{
            width: "28.5px",
            height: "28.5px",
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
