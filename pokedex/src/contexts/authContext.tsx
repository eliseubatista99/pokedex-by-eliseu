import React from "react";
import { useContext } from "react";
import { auth } from "@configs";
import {
  createUserWithEmailAndPassword,
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
}

const AuthContext = React.createContext<AuthContextOutputProps>({
  currentUser: null,
  signUp: (email: string, password: string, username: string) => {
    return new Promise((res) => console.log("Initializing auth signup method"));
  },
});

export const AuthProvider = ({ children }: AuthContextInputProps) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  const signUp = (email: string, password: string, username: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
