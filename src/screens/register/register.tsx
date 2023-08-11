import { ImageAssets } from "@assets";
import {
  AppLayout,
  CustomImage,
  Iconography,
  OnboardingBottomContent,
} from "@components";
import { useRegisterHelper } from "./register.hook";

export const Register = () => {
  const { onClickEmail, onClickApple, onClickGoogle } = useRegisterHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Create Account",
      }}
    >
      <CustomImage
        src={ImageAssets.registerFigure}
        alt={"A girl with a long hair with her right hand up in the air"}
        containerStyles={{
          margin: "auto",
          maxWidth: "240px",
          height: "auto",
        }}
      />
      <OnboardingBottomContent
        title="Almost ready to explore this world"
        description="How do you wish to connect?"
        buttons={[
          {
            type: "secondary",
            text: "Continue With Apple",
            startContent: (
              <Iconography.Apple
                width="22px"
                height="22px"
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
