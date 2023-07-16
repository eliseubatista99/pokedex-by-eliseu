import {
  AppHeader,
  AppHeaderProps,
  AppScreen,
  GlobalLoader,
} from "@components";
import { useBaseStore } from "@store";
export interface AppLayoutProps {
  header: AppHeaderProps;
  children?: React.ReactNode;
}

export const AppLayout = ({ header, children }: AppLayoutProps) => {
  const { isLoading } = useBaseStore();

  return (
    <>
      {isLoading && <GlobalLoader />}
      <div
        style={{
          width: "100%",
          flex: 1,
          margin: "auto",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <AppHeader {...header} />
        <AppScreen>{children}</AppScreen>
      </div>
    </>
  );
};
