import { usePokedexFirebaseAuth } from "@contexts";

export const useNameAndPhotoHelper = () => {
  const { currentUser } = usePokedexFirebaseAuth();

  return {
    username: currentUser?.displayName,
  };
};
