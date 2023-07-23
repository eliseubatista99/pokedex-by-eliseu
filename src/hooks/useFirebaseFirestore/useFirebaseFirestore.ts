import React from "react";
import { firestore } from "@configs";
import { useUserStore } from "@store";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { User } from "firebase/auth";

export const useFirebaseFirestore = () => {
  const { setUserFavorites } = useUserStore();
  const usersCollectionRef = collection(firestore, "users");

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

  const updateUserFavorites = React.useCallback(
    async (user: User, favorites: number[]) => {
      const newUserRef = doc(usersCollectionRef, user.uid);

      await updateDoc(newUserRef, { favorites });

      setUserFavorites(favorites);
    },
    [setUserFavorites, usersCollectionRef]
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
    const data = await getDocs(usersCollectionRef);
    const parsedData = data.docs.map((doc) => doc.data());
    console.log(parsedData);
  }, [usersCollectionRef]);

  return {
    getUser,
    createUser,
    updateUserEmail,
    updateUserName,
    updateUserFavorites,
    deleteUser,
  };
};
