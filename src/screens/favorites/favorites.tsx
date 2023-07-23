import { AppLayout, PokedexBottomContent } from "@components";
import { Blocks } from "./Blocks";
import { useFavoritesHelper } from "./favorites.hook";

export const Favorites = () => {
  const { currentUser } = useFavoritesHelper();
  return (
    <AppLayout
      header={{ type: "pokedex", title: "Favorites" }}
      bottomContent={<PokedexBottomContent />}
    >
      {!currentUser && <Blocks.Guest />}
      {currentUser && <></>}
    </AppLayout>
  );
};
