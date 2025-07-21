import { Modals } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useFirebaseAuth } from "@eliseubatista99/react-scaffold-firebase";
import { FirebaseError } from "firebase/app";
import React from "react";
import { useBaseStore } from "../../store";

const REQUIRES_RECENT_LOGIN_ERROR = "auth/requires-recent-login";

export const usePokedexFirebaseAuth = () => {
  const firebaseAuthHook = useFirebaseAuth();
  const { updateBaseStore } = useBaseStore();
  const { showItem, hideItem } = useFeedback();

  const hideLoginAgainModal = () => {
    hideItem(Modals.loginAgain);
  };

  const signUp = async (email: string, password: string, username: string) => {
    return await firebaseAuthHook.signUp({ email, password, username }, (err) =>
      console.error("UsePokedexFirebaseAuthError > ", err)
    );
  };

  const logIn = async (email: string, password: string) => {
    return await firebaseAuthHook.logIn({ email, password }, (err) =>
      console.error("UsePokedexFirebaseAuthError > ", err)
    );
  };

  const logout = async () => {
    return await firebaseAuthHook.logout((err) =>
      console.error("UsePokedexFirebaseAuthError > ", err)
    );
  };

  const resetPassword = async (email: string) => {
    return await firebaseAuthHook.resetPassword({ email }, (err) =>
      console.error("UsePokedexFirebaseAuthError > ", err)
    );
  };

  const updateEmail = React.useCallback(
    async (email: string) => {
      return await firebaseAuthHook.updateEmail({ email }, (error) => {
        const firebaseError = error as FirebaseError;
        console.log("ZAU", { firebaseError, REQUIRES_RECENT_LOGIN_ERROR });

        if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
          updateBaseStore({
            loginAgainModal: {
              currentUser: firebaseAuthHook.currentUser,
              onLoginDone: () => hideItem(Modals.loginAgain),
              onClickOutsideModal: () => hideLoginAgainModal(),
            },
          });

          showItem(Modals.loginAgain);
        }
      });
    },
    [firebaseAuthHook, hideItem, hideLoginAgainModal, showItem, updateBaseStore]
  );

  const updatePassword = React.useCallback(
    async (password: string) => {
      return await firebaseAuthHook.updatePassword({ password }, (error) => {
        const firebaseError = error as FirebaseError;

        if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
          updateBaseStore({
            loginAgainModal: {
              currentUser: firebaseAuthHook.currentUser,
              onLoginDone: () => hideItem(Modals.loginAgain),
              onClickOutsideModal: () => hideLoginAgainModal(),
            },
          });
          showItem(Modals.loginAgain);
        }
      });
    },
    [firebaseAuthHook, hideItem, hideLoginAgainModal, showItem, updateBaseStore]
  );

  const updateName = React.useCallback(
    async (name: string) => {
      return await firebaseAuthHook.updateName({ name }, (error) => {
        const firebaseError = error as FirebaseError;
        if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
          updateBaseStore({
            loginAgainModal: {
              currentUser: firebaseAuthHook.currentUser,
              onLoginDone: () => hideItem(Modals.loginAgain),
              onClickOutsideModal: () => hideLoginAgainModal(),
            },
          });
          showItem(Modals.loginAgain);
        }
      });
    },
    [firebaseAuthHook, hideItem, hideLoginAgainModal, showItem, updateBaseStore]
  );

  return {
    currentUser: firebaseAuthHook.currentUser,
    signUp,
    logIn,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateName,
  };
};
