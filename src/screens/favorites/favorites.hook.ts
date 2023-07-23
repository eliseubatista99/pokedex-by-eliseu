import { useFirebaseAuth } from "@contexts";

export const useFavoritesHelper = () => {
  const { currentUser } = useFirebaseAuth();

  return {
    currentUser,
  };
};
