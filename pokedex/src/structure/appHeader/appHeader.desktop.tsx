import { AppHeaderProps } from ".";

export const AppHeaderDesktop = ({
  withBack,
  onClickBack,
  title,
}: AppHeaderProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    ></div>
  );
};
