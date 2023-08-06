import { AppLayout, PokedexBottomContent } from "@components";

export const Items = () => {
  return (
    <AppLayout
      header={{ type: "pokedex", title: "Items" }}
      bottomContent={<PokedexBottomContent />}
    ></AppLayout>
  );
};
