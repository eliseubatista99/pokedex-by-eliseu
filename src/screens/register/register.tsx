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
          maxWidth: "180px",
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
