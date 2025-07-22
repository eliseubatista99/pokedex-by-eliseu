import { firebaseConfig } from "@configs";
import { FirebaseAppHelper } from "@eliseubatista99/react-scaffold-firebase";
import { AppProviders } from "../../appProviders";

interface TestComponentProps {
  children?: React.ReactNode;
}

export const TestComponent = ({ children }: TestComponentProps) => {
  FirebaseAppHelper.initializeApp(firebaseConfig);

  return <AppProviders>{children}</AppProviders>;
};
