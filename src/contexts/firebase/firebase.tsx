import React from "react";
import { useContext } from "react";
import { auth } from "@configs";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
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
  ) => Promise<string | undefined>;
  logIn?: (email: string, password: string) => Promise<string | undefined>;
  logout?: () => Promise<void>;
  resetPassword?: (email: string) => Promise<string | undefined>;
}

const FirebaseContext = React.createContext<FirebaseContextOutputProps>({});

export const FirebaseProvider = ({ children }: FirebaseContextInputProps) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const signUp = async (
    email: string,
    password: string,
    username: string
  ): Promise<string | undefined> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, { displayName: username });

      return undefined;
    } catch (error) {
      console.log("Error signing up: ", error);

      return "error";
    }
  };

  const logIn = async (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      return undefined;
    } catch (error) {
      console.log("Error loggin in: ", error);

      return "error";
    }
  };

  const logout = async () => {
    return auth.signOut();
  };

  const resetPassword = async (email: string): Promise<string | undefined> => {
    try {
      await sendPasswordResetEmail(auth, email);

      return undefined;
    } catch (error) {
      console.log("Error reseting password in: ", error);

      return "error";
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider
      value={{ currentUser, signUp, logIn, logout, resetPassword }}
    >
      {!isLoading && children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};
