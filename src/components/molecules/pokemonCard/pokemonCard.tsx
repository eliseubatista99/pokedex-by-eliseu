import { CardChip, CustomImage, Typography } from "@components";
import { PokemonHelper, TextHelper } from "@helpers";
import type { PokemonShort } from "@types";
import { type CSSProperties } from "react";
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
    <CardChip
      key={type}
      text={`${TextHelper.getPascalCase(type)}`}
      image={PokemonHelper.getPokemonTypeIcon(type)}
      styles={{ background: `${PokemonHelper.getPokemonColor([type])}` }}
    />
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
        boxShadow: isHovered ? "rgba(0, 0, 0, 0.24) 0px 4px 10px" : "none",

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
          padding: "16px 10px 16px 16px",
        }}
      >
        <Typography styles={{ fontSize: "15px", fontWeight: 600 }}>
          {pokemonData.pokemonId}
        </Typography>
        <Typography styles={{ fontSize: "21px", fontWeight: 600 }}>
          {pokemonData.pokemonName}
        </Typography>

        <div
          style={{
            flexDirection: "row",
            overflow: "hidden",
            flexWrap: "wrap",
            gap: "8px",
            width: "100%",
            marginTop: "auto",
            paddingTop: "8px",
          }}
        >
          {typeChips}
        </div>
      </div>
      <div
        style={{
          minWidth: "38%",
          maxWidth: "38%",
          background: pokemonData.pokemonColor,
          borderRadius: "15px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "102px",
          minHeight: "100%",
        }}
      >
        <CustomImage
          src={PokemonHelper.getPokemonTypeIcon(pokemonData.pokemonMainType)}
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
        {pokemonData.pokemonSprite && (
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
        )}
      </div>
    </div>
  );
};
