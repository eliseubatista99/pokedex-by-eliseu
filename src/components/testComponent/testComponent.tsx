import { firebaseConfig } from "@configs";
import { PokedexFirebaseAuthProvider } from "@contexts";
import { FirebaseAppHelper } from "@eliseubatista99/react-scaffold-firebase";
import { BrowserRouter } from "react-router-dom";

interface TestComponentProps {
  children?: React.ReactNode;
}

export const TestComponent = ({ children }: TestComponentProps) => {
  FirebaseAppHelper.initializeApp(firebaseConfig);

  return (
    <PokedexFirebaseAuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </PokedexFirebaseAuthProvider>
  );
};
