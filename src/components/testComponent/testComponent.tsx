import { PokedexFirebaseAuthProvider } from "@contexts";
import { BrowserRouter } from "react-router-dom";

interface TestComponentProps {
  children?: React.ReactNode;
}

export const TestComponent = ({ children }: TestComponentProps) => {
  return (
    <PokedexFirebaseAuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </PokedexFirebaseAuthProvider>
  );
};
