import React from "react";
import { auth } from "@configs";
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

export const useFirebaseAuth = () => {
  const { setFirebaseUser } = useUserStore();

  const currentUser = React.useRef<User | null>(null);

  const signUp = async (email: string, password: string, username: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, {
      displayName: username,
    });

    return userCredential;
  };

  const logIn = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return auth.signOut();
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);

    return currentUser.current;
  };

  const updateUserEmail = async (email: string) => {
    if (currentUser.current) {
      await updateEmail(currentUser.current, email);
    }

    return currentUser.current;
  };

  const updateUserPassword = async (password: string) => {
    if (currentUser.current) {
      await updatePassword(currentUser.current, password);
    }

    return currentUser.current;
  };

  const updateUserName = async (name: string) => {
    if (currentUser.current) {
      await updateProfile(currentUser.current, {
        displayName: name,
      });
    }

    return currentUser.current;
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      console.log("STORE UPDATING USER");
      currentUser.current = user;

      setFirebaseUser(user);
    });

    return unsubscribe;
  }, [setFirebaseUser]);

  return {
    currentUser: currentUser.current,
    signUp,
    logIn,
    logout,
    resetPassword,
    updateEmail: updateUserEmail,
    updatePassword: updateUserPassword,
    updateName: updateUserName,
  };
};
