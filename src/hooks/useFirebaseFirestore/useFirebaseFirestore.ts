import React from "react";
import { auth, firestore } from "@configs";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { useUserStore } from "@store";
import { collection, getDocs } from "firebase/firestore";

export const useFirebaseFirestore = () => {
  const { setFirebaseUser } = useUserStore();
  const usersCollectionRef = collection(firestore, "users");

  // const currentUser = React.useRef<User | null>(null);

  // const signUp = async (email: string, password: string, username: string) => {
  //   const userCredential = await createUserWithEmailAndPassword(
  //     auth,
  //     email,
  //     password
  //   );

  //   await updateProfile(userCredential.user, {
  //     displayName: username,
  //   });

  //   return userCredential;
  // };

  // const logIn = async (email: string, password: string) => {
  //   return await signInWithEmailAndPassword(auth, email, password);
  // };

  // const logout = async () => {
  //   return auth.signOut();
  // };

  // const resetPassword = async (email: string) => {
  //   return await sendPasswordResetEmail(auth, email);
  // };

  // const updateUserEmail = async (email: string) => {
  //   if (currentUser.current) {
  //     await updateEmail(currentUser.current, email);
  //   }
  // };

  // const updateUserPassword = async (password: string) => {
  //   if (currentUser.current) {
  //     await updatePassword(currentUser.current, password);
  //   }
  // };

  // const updateUserName = async (name: string) => {
  //   if (currentUser.current) {
  //     await updateProfile(currentUser.current, {
  //       displayName: name,
  //     });
  //   }
  // };

  const getUser = React.useCallback(async () => {
    const data = await getDocs(usersCollectionRef);
    const parsedData = data.docs.map((doc) => doc.data());
    console.log(parsedData);
  }, [usersCollectionRef]);

  return {
    // currentUser: currentUser.current,
    // signUp,
    // logIn,
    // logout,
    // resetPassword,
    // updateEmail: updateUserEmail,
    // updatePassword: updateUserPassword,
    // updateName: updateUserName,
    getUser,
  };
};
