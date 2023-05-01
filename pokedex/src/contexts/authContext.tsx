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

interface AuthContextInputProps {
  children: React.ReactNode;
}

interface AuthContextOutputProps {
  currentUser: User | null;
  signUp: (
    email: string,
    password: string,
    username: string
  ) => Promise<string | undefined>;
  logIn: (email: string, password: string) => Promise<string | undefined>;
  resetPassword: (email: string) => Promise<string | undefined>;
}

const AuthContext = React.createContext<AuthContextOutputProps>({
  currentUser: null,
  signUp: (email: string, password: string, username: string) => {
    return new Promise((res) => undefined);
  },
  logIn: (email: string, password: string) => {
    return new Promise((res) => undefined);
  },
  resetPassword: (email: string) => {
    return new Promise((res) => undefined);
  },
});

export const AuthProvider = ({ children }: AuthContextInputProps) => {
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
    <AuthContext.Provider value={{ currentUser, signUp, logIn, resetPassword }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
