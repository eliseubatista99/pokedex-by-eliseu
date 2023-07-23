import {
  AppHeader,
  AppHeaderProps,
  AppScreen,
  AppScreenProps,
  GlobalLoader,
} from "@components";
import { useBaseStore } from "@store";
import { BaseToast } from "@toasts";
export interface AppLayoutProps {
  header?: AppHeaderProps;
  screen?: AppScreenProps;
  bottomContent?: React.ReactNode;
  children?: React.ReactNode;
}

export const AppLayout = ({
  header,
  screen,
  children,
  bottomContent,
}: AppLayoutProps) => {
  const { loading, toast } = useBaseStore();

  return (
    <>
      {loading && (
        <GlobalLoader loadingText={loading.loadingText} style={loading.style} />
      )}
      {toast && (
        <BaseToast
          duration={toast.duration || 3}
          icon={toast.icon}
          text={toast.text}
        />
      )}
      <div
        style={{
          width: "100%",
          flex: 1,
          margin: "auto",
          background: "#ffffff",
          position: "relative",
        }}
      >
        {header && <AppHeader {...header} />}
        <AppScreen {...screen}>{children}</AppScreen>
        {bottomContent && (
          <div style={{ position: "sticky", bottom: 0, width: "100%" }}>
            {bottomContent}
          </div>
        )}
      </div>
    </>
  );
};
