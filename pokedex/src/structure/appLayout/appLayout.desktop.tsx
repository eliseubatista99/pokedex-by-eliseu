import { AppLayoutProps } from ".";

export const AppLayoutDesktop = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <p>DESKTOP</p>
      <>{children}</>
    </div>
  );
};
