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
          maxWidth: "267px",
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
                width="22px"
                height="21px"
                containerProps={{ margin: "-4px 0 0 0" }}
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
                width="19px"
                height="19px"
                containerProps={{ margin: "0 0 0 -6px" }}
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
