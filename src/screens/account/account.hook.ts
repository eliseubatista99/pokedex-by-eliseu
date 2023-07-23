import { useFirebaseAuth } from "@contexts";

export const useAccountHelper = () => {
  const { currentUser } = useFirebaseAuth();

  return {
    currentUser,
  };
};
