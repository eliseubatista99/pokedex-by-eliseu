import { ImageAssets } from "@assets";
import {
  AppLayout,
  CustomImage,
  Iconography,
  OnboardingBottomContent,
} from "@components";
import { useLoginHelper } from "./login.hook";

export const Login = () => {
  const { onPointerDownEmail, onPointerDownApple, onPointerDownGoogle } =
    useLoginHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Log In",
      }}
      bottomContent={
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
                  height="28px"
                  containerProps={{ margin: "-4px 0 0 0" }}
                />
              ),
              onPointerDown: onPointerDownApple,
              isDisabled: true,
            },
            {
              type: "secondary",
              text: "Continue With Google",
              startContent: (
                <Iconography.Google
                  width="26px"
                  height="26px"
                  containerProps={{ margin: "0 0 0 -6px" }}
                />
              ),
              onPointerDown: onPointerDownGoogle,
              isDisabled: true,
            },
            {
              type: "primary",
              text: "Continue With Email",
              onPointerDown: onPointerDownEmail,
            },
          ]}
        />
      }
    >
      <CustomImage
        src={ImageAssets.loginFigure}
        alt={"A girl and a boy pointing up"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};
