import { ImageAssets } from "@assets";
import {
  AppLayout,
  CustomButton,
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
      bottomContent={
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
                  height="28px"
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
                  width="26px"
                  height="26px"
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
      }
    >
      <CustomImage
        src={ImageAssets.registerFigure}
        alt={"A girl with a long hair with her right hand up in the air"}
        styles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};