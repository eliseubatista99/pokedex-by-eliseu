import { useFirebaseAuth } from "@hooks";

export const useNameAndPhotoHelper = () => {
  const { currentUser } = useFirebaseAuth();

  return {
    username: currentUser?.displayName,
  };
};
