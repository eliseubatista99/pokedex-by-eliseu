import { useFirebase } from "@hooks";

export const useNameAndPhotoHelper = () => {
  const { currentUser } = useFirebase();

  return {
    username: currentUser?.displayName,
  };
};
