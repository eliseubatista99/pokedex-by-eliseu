import { FirebaseAuthProvider } from "@contexts";
import { BrowserRouter } from "react-router-dom";

interface TestComponentProps {
  children?: React.ReactNode;
}

export const TestComponent = ({ children }: TestComponentProps) => {
  return (
    <FirebaseAuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </FirebaseAuthProvider>
  );
};
