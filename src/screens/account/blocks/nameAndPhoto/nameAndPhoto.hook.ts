import { useFirebaseAuth } from "@contexts";

export const useNameAndPhotoHelper = () => {
  const { currentUser } = useFirebaseAuth();

  return {
    username: currentUser?.displayName,
  };
};
