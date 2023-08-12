import React from "react";
import { firestore } from "@configs";
import { useUserStore } from "@store";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { FirestoreUser } from "@types";

export const useFirebaseFirestore = () => {
  const { setUserFavorites } = useUserStore();
  const usersCollectionRef = collection(firestore, "users");

  const getUserData = React.useCallback(
    async (user: User) => {
      const userData = await getDocs(usersCollectionRef);
      const thisUserDoc = userData.docs.filter((doc) => doc.id === user.uid);
      const thisUserData = thisUserDoc[0]?.data() as FirestoreUser;

      return thisUserData;
    },
    [usersCollectionRef]
  );

  const deleteUser = React.useCallback(
    async (user: User) => {
      const newUserRef = doc(usersCollectionRef, user.uid);

      await deleteDoc(newUserRef);
    },
    [usersCollectionRef]
  );

  const updateUserEmail = React.useCallback(
    async (user: User, email: string) => {
      const newUserRef = doc(usersCollectionRef, user.uid);

      await updateDoc(newUserRef, { email });
    },
    [usersCollectionRef]
  );

  const updateUserName = React.useCallback(
    async (user: User, name: string) => {
      const newUserRef = doc(usersCollectionRef, user.uid);

      await updateDoc(newUserRef, { name });
    },
    [usersCollectionRef]
  );

  const addOrRemoveFromFavorites = React.useCallback(
    async (user: User, pokemon: number) => {
      const newUserRef = doc(usersCollectionRef, user.uid);
      const userData = await getUserData(user);

      let favorites = userData.favorites;

      if (favorites.includes(pokemon)) {
        favorites = favorites.filter((fav) => fav !== pokemon);
      } else {
        favorites.push(pokemon);
      }

      setUserFavorites(favorites);

      await updateDoc(newUserRef, { favorites });
    },
    [getUserData, setUserFavorites, usersCollectionRef]
  );

  const getFavorites = React.useCallback(
    async (user: User, pokemon: number) => {
      const userData = await getUserData(user);

      return userData.favorites;
    },
    [getUserData]
  );

  const createUser = React.useCallback(
    async (user: User) => {
      const newUserRef = doc(usersCollectionRef, user.uid);

      const newUserData = {
        name: user.displayName || "",
        email: user.email || "",
        favorites: [],
      };

      await setDoc(newUserRef, newUserData);
    },
    [usersCollectionRef]
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
