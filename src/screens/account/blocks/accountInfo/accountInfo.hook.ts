import { useFirebaseContext } from "@contexts";

export const useAccountInfoHelper = () => {
  const { currentUser } = useFirebaseContext();

  return {
    username: currentUser?.displayName,
    email: currentUser?.email,
  };
};
