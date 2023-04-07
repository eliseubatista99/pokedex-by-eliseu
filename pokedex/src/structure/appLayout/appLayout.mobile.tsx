import { AppLayoutProps } from ".";

export const AppLayoutMobile = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <p>MOBILE</p>
      <>{children}</>
    </div>
  );
};
