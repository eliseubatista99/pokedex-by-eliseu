import { CustomButton, OnboardingHeader, Typography } from "@components";
import { AppLayout } from "@structure";
import { useRegisterDataHelper } from "./registerData.hook";

export const RegisterDataDesktopScreen = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    onClickBack,
    onClickContinue,
    onFormNameChanged,
    onFormEmailChanged,
    onFormPasswordChanged,
    onFormConfirmPasswordChanged,
  } = useRegisterDataHelper();

  return (
    <AppLayout
      withoutNavigation
      topContent={
        <OnboardingHeader title="Create Account" onClickBack={onClickBack} />
      }
      bottomContent={
        <div style={{ width: "100%" }}>
          <CustomButton
            appearance={"primary"}
            middleContent={"Continue"}
            containerProps={{
              margin: "12px auto 40px auto",
              paddingLeft: "32px",
              paddingRight: "32px",
            }}
            onClick={onClickContinue}
          />
        </div>
      }
      screenContainerProps={{ paddingTop: "50px" }}
    >
      <Typography
        size="headline_26"
        containerProps={{ margin: "0 auto", textAlign: "center" }}
      >
        Let's start...
      </Typography>
      <Typography
        size="headline_26"
        weight="semi-bold"
        containerProps={{ margin: "0 auto", textAlign: "center" }}
      >
        Fill in some data!
      </Typography>
    </AppLayout>
  );
};
