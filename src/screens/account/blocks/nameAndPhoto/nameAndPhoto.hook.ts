import { useFirebaseContext } from "@contexts";

export const useNameAndPhotoHelper = () => {
  const { currentUser } = useFirebaseContext();

  return {
    username: currentUser?.displayName,
  };
};
