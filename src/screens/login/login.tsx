import { ImageAssets } from "@assets";
import {
  AppLayout,
  CustomImage,
  Iconography,
  OnboardingBottomContent,
} from "@components";
import { useLoginHelper } from "./login.hook";

export const Login = () => {
  const { onClickEmail, onClickApple, onClickGoogle } = useLoginHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Log In",
      }}
    >
      <CustomImage
        src={ImageAssets.loginFigure}
        alt={"A girl and a boy pointing up"}
        containerStyles={{
          margin: "auto",
          maxWidth: "200.25px",
          height: "auto",
        }}
      />
      <OnboardingBottomContent
        title="Good to see you again!"
        description="How do you wish to connect?"
        buttons={[
          {
            type: "secondary",
            text: "Continue With Apple",
            startContent: (
              <Iconography.Apple
                width="16.5px"
                height="21px"
                containerProps={{ margin: "-3px 0 0 0" }}
              />
            ),
            onClick: onClickApple,
            isDisabled: true,
          },
          {
            type: "secondary",
            text: "Continue With Google",
            startContent: (
              <Iconography.Google
                width="19.5px"
                height="19.5px"
                containerProps={{ margin: "0 0 0 -4.5px" }}
              />
            ),
            onClick: onClickGoogle,
            isDisabled: true,
          },
          {
            type: "primary",
            text: "Continue With Email",
            onClick: onClickEmail,
          },
        ]}
      />
    </AppLayout>
  );
};
