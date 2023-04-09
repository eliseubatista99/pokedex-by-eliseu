import { AppLayout } from "@structure";
import { RegisterHelperOutputProps } from "src/pages/register/register/register.hook";

export const RegisterDesktopScreen = ({
  onClickApple,
  onClickGoogle,
  onClickEmail,
}: RegisterHelperOutputProps) => {
  return <AppLayout withoutNavigation></AppLayout>;
};
