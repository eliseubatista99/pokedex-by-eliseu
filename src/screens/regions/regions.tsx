import { AppLayout, PokedexBottomContent } from "@components";

export const Regions = () => {
  return (
    <AppLayout
      header={{ type: "pokedex", title: "Regions" }}
      bottomContent={<PokedexBottomContent />}
    ></AppLayout>
  );
};
