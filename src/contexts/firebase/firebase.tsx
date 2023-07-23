import React from "react";
import { useContext } from "react";
import { auth } from "@configs";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";

interface FirebaseContextInputProps {
  children: React.ReactNode;
}

interface FirebaseContextOutputProps {
  currentUser?: User | null;
  signUp?: (
    email: string,
    password: string,
    username: string
  ) => Promise<UserCredential | undefined>;
  logIn?: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  logout?: () => Promise<void>;
  resetPassword?: (email: string) => Promise<void>;
  updateEmail?: (email: string) => Promise<void>;
  updatePassword?: (password: string) => Promise<void>;
  updateName?: (name: string) => Promise<void>;
}

const FirebaseContext = React.createContext<FirebaseContextOutputProps>({});

export const FirebaseProvider = ({ children }: FirebaseContextInputProps) => {
  const currentUser = React.useRef<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

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
    return await sendPasswordResetEmail(auth, email);
  };

  const updateUserEmail = async (email: string) => {
    if (currentUser.current) {
      await updateEmail(currentUser.current, email);
    }
  };

  const updateUserPassword = async (password: string) => {
    if (currentUser.current) {
      await updatePassword(currentUser.current, password);
    }
  };

  const updateUserName = async (name: string) => {
    if (currentUser.current) {
      await updateProfile(currentUser.current, {
        displayName: name,
      });
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      currentUser.current = user;
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider
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
      {!isLoading && children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};
