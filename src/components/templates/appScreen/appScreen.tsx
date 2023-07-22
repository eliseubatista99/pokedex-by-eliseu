export interface AppScreenProps {
  children?: React.ReactNode;
}

export const AppScreen = ({ children }: AppScreenProps) => {
  return (
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
  );
};
