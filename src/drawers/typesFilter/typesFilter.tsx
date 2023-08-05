import { Chip, Typography } from "@components";
import { DRAWER_PADDING } from "@constants";
import { PokemonHelper } from "@helpers";
import { BaseDrawer, BaseDrawerProps } from "../_baseDrawer";
import { useTypesFilterDrawerHelper } from "./typesFilter.hook";

export const DrawerTypesFilter = (props: BaseDrawerProps) => {
  const { onTypeSelected } = useTypesFilterDrawerHelper(props);

  const types = [
    { name: "all types", value: "" },
    { name: "grass", value: "grass" },
    { name: "water", value: "water" },
    { name: "fire", value: "fire" },
    { name: "dark", value: "dark" },
    { name: "fairy", value: "fairy" },
    { name: "ice", value: "ice" },
    { name: "dragon", value: "dragon" },
    { name: "bug", value: "bug" },
    { name: "poison", value: "poison" },
    { name: "steel", value: "steel" },
    { name: "ground", value: "ground" },
    { name: "rock", value: "rock" },
    { name: "fighting", value: "fighting" },
    { name: "eletric", value: "eletric" },
    { name: "psychic", value: "psychic" },
    { name: "flying", value: "flying" },
    { name: "ghost", value: "ghost" },
    { name: "normal", value: "normal" },
  ];

  const chips = types.map((type) => (
    <Chip
      key={type.name}
      text={type.name}
      styles={{ background: PokemonHelper.getPokemonColor(type.value) }}
      onClick={() => onTypeSelected(type.value)}
    />
  ));

  return (
    <BaseDrawer
      {...props}
      styles={{
        justifyContent: "flex-start",
        padding: `${DRAWER_PADDING}px 0`,
        ...props.styles,
      }}
    >
      <Typography
        styles={{
          color: "#4d4d4d",
          fontSize: "14px",
          fontWeight: 600,
          textAlign: "center",
          marginTop: "12px",
          minHeight: "24px",
        }}
      >
        {"Select the type"}
      </Typography>
      <div
        style={{
          flexDirection: "column",
          width: "100%",
          padding: `0 ${DRAWER_PADDING}px`,
          gap: "12px",
          marginTop: "32px",
          overflow: "auto",
          justifyContent: "flex-start",
        }}
      >
        {chips}
      </div>
    </BaseDrawer>
  );
};
