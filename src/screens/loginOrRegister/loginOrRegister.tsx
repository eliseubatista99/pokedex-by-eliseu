import { ImageAssets } from "@assets";
import {
  AppLayout,
  CustomButton,
  CustomImage,
  Iconography,
  OnboardingBottomContent,
} from "@components";
import { useLoginOrRegisterHelper } from "./loginOrRegister.hook";

export const LoginOrRegister = () => {
  const { onClickSkip, onClickRegister, onClickAlreadyHaveAnAccount } =
    useLoginOrRegisterHelper();

  return (
    <AppLayout
      header={{
        hideBack: true,
        type: "default",
        rightContent: (
          <CustomButton
            type={"ghost"}
            onClick={onClickSkip}
            text="Skip"
            endContent={
              <Iconography.ArrowRight
                width="27px"
                height="27px"
                stroke="#173EA5"
              />
            }
            styles={{ width: "fit-content", color: "#000000", padding: 0 }}
          />
        ),
      }}
    >
      <CustomImage
        src={ImageAssets.loginOrRegisterFigure}
        alt={"A boy and a girl"}
        containerStyles={{
          margin: "auto",
          maxWidth: "320px",
          height: "auto",
        }}
      />
      <OnboardingBottomContent
        title="Are you ready for this adventure?"
        description="Just create an account and start exploring the world of Pokémon
            today!"
        buttons={[
          {
            type: "primary",
            text: "Register",
            onClick: onClickRegister,
          },
          {
            type: "ghost",
            text: "I already have and account",
            onClick: onClickAlreadyHaveAnAccount,
          },
        ]}
      />
    </AppLayout>
  );
};
