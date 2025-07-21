import { Chip, Typography } from "@components";
import { DRAWER_PADDING, Drawers, EPokemonsTypes } from "@constants";
import { Drawer, type DrawerProps } from "@eliseubatista99/react-scaffold-core";
import { PokemonHelper } from "@helpers";
import { useTypesFilterDrawerHelper } from "./typesFilter.hook";

export interface DrawerTypesFilterProps extends Omit<DrawerProps, "id"> {
  onTypeSelected: (data: EPokemonsTypes | undefined) => void;
}

export const DrawerTypesFilter = (props: DrawerTypesFilterProps) => {
  const { onTypeSelected } = useTypesFilterDrawerHelper(props);

  const types = [
    { name: EPokemonsTypes.AllTypes, value: EPokemonsTypes.AllTypes },
    { name: EPokemonsTypes.Grass, value: EPokemonsTypes.Grass },
    { name: EPokemonsTypes.Water, value: EPokemonsTypes.Water },
    { name: EPokemonsTypes.Fire, value: EPokemonsTypes.Fire },
    { name: EPokemonsTypes.Dark, value: EPokemonsTypes.Dark },
    { name: EPokemonsTypes.Fairy, value: EPokemonsTypes.Fairy },
    { name: EPokemonsTypes.Ice, value: EPokemonsTypes.Ice },
    { name: EPokemonsTypes.Dragon, value: EPokemonsTypes.Dragon },
    { name: EPokemonsTypes.Bug, value: EPokemonsTypes.Bug },
    { name: EPokemonsTypes.Poison, value: EPokemonsTypes.Poison },
    { name: EPokemonsTypes.Steel, value: EPokemonsTypes.Steel },
    { name: EPokemonsTypes.Ground, value: EPokemonsTypes.Ground },
    { name: EPokemonsTypes.Rock, value: EPokemonsTypes.Rock },
    { name: EPokemonsTypes.Fighting, value: EPokemonsTypes.Fighting },
    { name: EPokemonsTypes.Eletric, value: EPokemonsTypes.Eletric },
    { name: EPokemonsTypes.Psychic, value: EPokemonsTypes.Psychic },
    { name: EPokemonsTypes.Flying, value: EPokemonsTypes.Flying },
    { name: EPokemonsTypes.Ghost, value: EPokemonsTypes.Ghost },
    { name: EPokemonsTypes.Normal, value: EPokemonsTypes.Normal },
  ];

  const chips = types.map((type) => (
    <Chip
      key={type.name || "All Types"}
      text={type.name || "All Types"}
      styles={{ background: PokemonHelper.getPokemonColor([type.value]) }}
      onClick={() => onTypeSelected(type.value)}
    />
  ));

  return (
    <Drawer
      {...props}
      id={Drawers.typesFilter}
      onCloseDrawer={() => props.onTypeSelected(undefined)}
      // styles={{
      //   justifyContent: "flex-start",
      //   padding: `${DRAWER_PADDING}px 0`,
      //   ...props.styles,
      // }}
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
    </Drawer>
  );
};
