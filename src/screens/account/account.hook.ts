import { usePokedexFirebaseAuth } from "@contexts";

export const useAccountHelper = () => {
  const { currentUser } = usePokedexFirebaseAuth();

  return {
    currentUser,
  };
};
