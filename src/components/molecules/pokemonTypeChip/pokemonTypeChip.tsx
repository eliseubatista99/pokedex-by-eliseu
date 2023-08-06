import { CustomImage, Typography } from "@components";
import { EPokemonsTypes } from "@constants";
import { PokemonHelper, TextHelper } from "@helpers";

export interface PokemonTypeChipProps {
  type: EPokemonsTypes;
}

export const PokemonTypeChip = ({ type }: PokemonTypeChipProps) => {
  return (
    <div
      style={{
        flexDirection: "row",
        padding: "3px 6px",
        gap: "6px",
        borderRadius: "48px",
        background: `${PokemonHelper.getPokemonColor(type)}`,
      }}
    >
      <CustomImage
        src={PokemonHelper.getPokemonTypeIcon(type)}
        alt={"Pokemon Type Icon"}
        imageStyles={{ width: "12px", height: "12px" }}
        containerStyles={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "#ffffff",
        }}
      />
      <Typography>{`${TextHelper.getPascalCase(type)}`}</Typography>
    </div>
  );
};
