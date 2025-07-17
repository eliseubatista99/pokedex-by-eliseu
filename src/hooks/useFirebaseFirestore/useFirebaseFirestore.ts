import { useFirestore } from "@eliseubatista99/react-scaffold-firebase";
import { useUserStore } from "@store";
import type { User } from "firebase/auth";
import React from "react";
import type { FirestoreUser } from "../../types";

const usersCollectionName = "users";

export const useFirebaseFirestore = () => {
  const { setUserFavorites } = useUserStore();
  const firestoreHook = useFirestore();

  const getUserData = React.useCallback(
    async (user: User) => {
      const users = await firestoreHook.getItems<FirestoreUser>(
        usersCollectionName
      );

      return users.find((doc) => doc.id === user.uid)?.data;
    },
    [firestoreHook]
  );

  const deleteUser = React.useCallback(
    async (user: User) => {
      return await firestoreHook.deleteItem(usersCollectionName, user.uid);

      // const newUserRef = doc(usersCollectionRef, user.uid);

      // await deleteDoc(newUserRef);
    },
    [firestoreHook]
  );

  const updateUserEmail = React.useCallback(
    async (user: User, email: string) => {
      // const newUserRef = doc(usersCollectionRef, user.uid);

      // await updateDoc(newUserRef, { email });

      return await firestoreHook.updateItem(usersCollectionName, user.uid, {
        email,
      });
    },
    [firestoreHook]
  );

  const updateUserName = React.useCallback(
    async (user: User, name: string) => {
      // const newUserRef = doc(usersCollectionRef, user.uid);

      // await updateDoc(newUserRef, { name });

      return await firestoreHook.updateItem(usersCollectionName, user.uid, {
        name,
      });
    },
    [firestoreHook]
  );

  const addOrRemoveFromFavorites = React.useCallback(
    async (user: User, pokemon: string) => {
      const userData = await getUserData(user);

      let favorites = userData?.favorites || [];

      if (favorites.includes(pokemon)) {
        favorites = favorites.filter((fav) => fav !== pokemon);
      } else {
        favorites.push(pokemon);
      }

      setUserFavorites(favorites);

      return await firestoreHook.updateItem(usersCollectionName, user.uid, {
        favorites,
      });
    },
    [firestoreHook, getUserData, setUserFavorites]
  );

  const getFavorites = React.useCallback(
    async (user: User) => {
      const userData = await getUserData(user);

      return userData?.favorites || [];
    },
    [getUserData]
  );

  const createUser = React.useCallback(
    async (user: User) => {
      const newUserData = {
        name: user.displayName || "",
        email: user.email || "",
        favorites: [],
      };

      return await firestoreHook.addItem(
        usersCollectionName,
        user.uid,
        newUserData
      );
    },
    [firestoreHook]
  );

  const getUser = React.useCallback(async () => {
    // const data = await getDocs(usersCollectionRef);
    // const parsedData = data.docs.map((doc) => doc.data());
  }, []);

  return {
    getUser,
    createUser,
    updateUserEmail,
    updateUserName,
    getFavorites,
    addOrRemoveFromFavorites,
    deleteUser,
  };
};
