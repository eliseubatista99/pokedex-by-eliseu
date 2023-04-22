import React from "react";
import { useContext } from "react";
import { auth } from "@configs";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  UserCredential,
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
  ) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
}

const AuthContext = React.createContext<AuthContextOutputProps>({
  currentUser: null,
  signUp: (email: string, password: string, username: string) => {
    return new Promise((res) => console.log("Initializing auth signup method"));
  },
  logIn: (email: string, password: string) => {
    return new Promise((res) => console.log("Initializing auth login method"));
  },
});

export const AuthProvider = ({ children }: AuthContextInputProps) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const signUp = (email: string, password: string, username: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signUp, logIn }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
