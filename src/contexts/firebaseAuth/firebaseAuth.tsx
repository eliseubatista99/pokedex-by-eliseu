import React, { useContext } from "react";
import { auth } from "@configs";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  updateEmail,
  updatePassword,
  UserCredential,
} from "firebase/auth";
import { useUserStore } from "@store";
import { FirebaseError } from "firebase/app";
import { ModalLoginAgain, ModalLoginAgainProps } from "@modals";

const REQUIRES_RECENT_LOGIN_ERROR = "auth/requires-recent-login";

interface FirebaseAuthInputProps {
  children: React.ReactNode;
}

interface FirebaseContextOutputProps {
  currentUser?: User | null;
  signUp?: (
    email: string,
    password: string,
    username: string
  ) => Promise<UserCredential>;
  logIn?: (email: string, password: string) => Promise<UserCredential>;
  logout?: () => Promise<void>;
  resetPassword?: (email: string) => Promise<User | null>;
  updateEmail?: (email: string) => Promise<User | null>;
  updatePassword?: (password: string) => Promise<User | null>;
  updateName?: (name: string) => Promise<User | null>;
}

const FirebaseAuth = React.createContext<FirebaseContextOutputProps>({});

export const FirebaseAuthProvider = ({ children }: FirebaseAuthInputProps) => {
  const [loginAgainModal, setLoginAgainModal] = React.useState<
    ModalLoginAgainProps | undefined
  >(undefined);
  const { setFirebaseUser } = useUserStore();

  const currentUser = React.useRef<User | null>(null);

  const hideLoginAgainModal = () => {
    setLoginAgainModal({
      isVisible: false,
      onClickOutsideModal: () => null,
    });
  };

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
    try {
      if (currentUser.current) {
        await updateEmail(currentUser.current, email);
      }

      return currentUser.current;
    } catch (error) {
      const firebaseError = error as FirebaseError;

      if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
        setLoginAgainModal({
          isVisible: true,
          currentUser: currentUser.current,
          onLoginDone: (user) => updateUserEmail(email),
          onClickOutsideModal: () => hideLoginAgainModal(),
        });
      }
      return null;
    }
  };

  const updateUserPassword = async (password: string) => {
    try {
      if (currentUser.current) {
        await updatePassword(currentUser.current, password);
      }

      return currentUser.current;
    } catch (error) {
      const firebaseError = error as FirebaseError;

      if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
        setLoginAgainModal({
          isVisible: true,
          currentUser: currentUser.current,
          onLoginDone: (user) => updateUserPassword(password),
          onClickOutsideModal: () => hideLoginAgainModal(),
        });
      }
      return null;
    }
  };

  const updateUserName = async (name: string) => {
    try {
      if (currentUser.current) {
        await updateProfile(currentUser.current, {
          displayName: name,
        });
      }

      return currentUser.current;
    } catch (error) {
      const firebaseError = error as FirebaseError;

      if (firebaseError.code === REQUIRES_RECENT_LOGIN_ERROR) {
        setLoginAgainModal({
          isVisible: true,
          currentUser: currentUser.current,
          onLoginDone: (user) => updateUserName(name),
          onClickOutsideModal: () => hideLoginAgainModal(),
        });
      }
      return null;
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      console.log("STORE UPDATING USER");
      currentUser.current = user;

      setFirebaseUser(user);
    });

    return unsubscribe;
  }, [setFirebaseUser]);

  return (
    <FirebaseAuth.Provider
      value={{
        currentUser: currentUser.current,
        signUp,
        logIn,
        logout,
        resetPassword,
        updateEmail: updateUserEmail,
        updatePassword: updateUserPassword,
        updateName: updateUserName,
      }}
    >
      {loginAgainModal && <ModalLoginAgain {...loginAgainModal} />}
      {children}
    </FirebaseAuth.Provider>
  );
};

export const useFirebaseAuth = () => {
  return useContext(FirebaseAuth);
};
