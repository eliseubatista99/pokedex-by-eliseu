import { CustomInputField } from "@components";

export const PokedexSection = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ borderBottom: "1px solid #F2F2F2" }}>
        <CustomInputField
          name="searchPokemon"
          placeHolder="Search Pokémon"
          containerProps={{
            padding: "20px 16px",
            width: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};
