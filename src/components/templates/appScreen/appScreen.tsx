import { AppHeader, AppHeaderProps, GlobalLoader } from "@components";
import { useBaseStore } from "@store";
export interface AppScreenProps {
  header: AppHeaderProps;
  children?: React.ReactNode;
}

export const AppScreen = ({ header, children }: AppScreenProps) => {
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
        <div
          style={{
            width: "100%",
            height: "fit-content",
            alignItems: "center",
            padding: "10px 10px 30px 10px",
            flex: 1,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
