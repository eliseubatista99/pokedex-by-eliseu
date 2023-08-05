import { CustomImage, PokemonTypeChip, Typography } from "@components";
import { PokemonHelper, TextHelper } from "@helpers";
import { PokemonShort } from "@types";
import { CSSProperties } from "react";
import { usePokemonCardHelper } from "./pokemonCard.hook";

export interface PokemonCardProps {
  pokemon: PokemonShort;
  onClick: (pokemon: PokemonShort) => void;
  containerProps?: CSSProperties;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { containerProps, onClick } = props;
  const { isHovered, onHover, onUnhover, pokemonData } =
    usePokemonCardHelper(props);

  const typeChips = pokemonData.pokemonTypes.map((type) => (
    <PokemonTypeChip type={type.name} />
  ));

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        background: `${pokemonData.pokemonColor}33`,
        borderRadius: "15px",
        cursor: "pointer",
        boxShadow: isHovered ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",

        ...containerProps,
      }}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onUnhover()}
      onClick={() => onClick(props.pokemon)}
    >
      <div
        style={{
          flexDirection: "column",
          flex: 1,
          padding: "12px 16px",
        }}
      >
        <Typography styles={{ fontSize: "11px", fontWeight: 600 }}>
          {pokemonData.pokemonId}
        </Typography>
        <Typography styles={{ fontSize: "15.75px", fontWeight: 600 }}>
          {pokemonData.pokemonName}
        </Typography>

        <div
          style={{
            flexDirection: "row",
            gap: "6px",
            width: "100%",
            marginTop: "auto",
          }}
        >
          {typeChips}
        </div>
      </div>
      <div
        style={{
          width: "38%",
          background: pokemonData.pokemonColor,
          borderRadius: "15px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "102px",
        }}
      >
        <CustomImage
          src={PokemonHelper.getPokemonTypeIcon(
            pokemonData.pokemonMainType?.name
          )}
          alt={"Pokemon Type Icon"}
          imageStyles={{ objectFit: "contain" }}
          containerStyles={{
            width: "74%",
            height: "92%",
            position: "absolute",
            zIndex: 0,
            opacity: 0.4,
            filter: "grayscale(100%) brightness(200%)",
          }}
        />
        <CustomImage
          src={pokemonData.pokemonSprite}
          alt={"Pokemon Sprite"}
          imageStyles={{ objectFit: "contain" }}
          containerStyles={{
            width: "100%",
            height: "92%",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};
