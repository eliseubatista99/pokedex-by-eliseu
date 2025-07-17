import { useFirebaseAuth } from "@eliseubatista99/react-scaffold-firebase";
import { FirebaseError } from "firebase/app";
import { useBaseStore } from "../../store";

const REQUIRES_RECENT_LOGIN_ERROR = "auth/requires-recent-login";

export const usePokedexFirebaseAuth = () => {
  const firebaseAuthHook = useFirebaseAuth();
  const { updateBaseStore } = useBaseStore();

  const hideLoginAgainModal = () => {
    setLoginAgainModal({
      isVisible: false,
      onClickOutsideModal: () => null,
    });
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

  const updateEmail = async (email: string) => {
    return await firebaseAuthHook.updateEmail({ email }, (error) => {
      const firebaseError = error as FirebaseError;
      console.log("ZAU", firebaseError.code);

      if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
        updateBaseStore({
          loginAgainModal: {
            isVisible: true,
            currentUser: firebaseAuthHook.currentUser,
            onLoginDone: () => updateEmail(email),
            onClickOutsideModal: () => hideLoginAgainModal(),
          },
        });
      }
    });
  };

  const updatePassword = async (password: string) => {
    return await firebaseAuthHook.updatePassword({ password }, (error) => {
      const firebaseError = error as FirebaseError;

      if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
        updateBaseStore({
          loginAgainModal: {
            isVisible: true,
            currentUser: firebaseAuthHook.currentUser,
            onLoginDone: () => updatePassword(password),
            onClickOutsideModal: () => hideLoginAgainModal(),
          },
        });
      }
    });
  };

  const updateName = async (name: string) => {
    return await firebaseAuthHook.updateName({ name }, (error) => {
      const firebaseError = error as FirebaseError;

      if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
        updateBaseStore({
          loginAgainModal: {
            isVisible: true,
            currentUser: firebaseAuthHook.currentUser,
            onLoginDone: () => updateName(name),
            onClickOutsideModal: () => hideLoginAgainModal(),
          },
        });
      }
    });
  };

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
