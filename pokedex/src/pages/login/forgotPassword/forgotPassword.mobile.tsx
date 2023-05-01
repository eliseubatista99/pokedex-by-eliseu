import {
  CustomButton,
  CustomInputField,
  OnboardingHeader,
  Typography,
} from "@components";
import { AppLayout } from "@structure";
import { ForgotPasswordHelperOutputProps } from "./forgotPassword.hook";

export const ForgotPasswordMobileScreen = ({
  forgotPasswordFormData,
  formRef,
  onClickBack,
  onClickContinue,
  onSubmitForm,
}: ForgotPasswordHelperOutputProps) => {
  return (
    <>
      <AppLayout
        withoutNavigation
        topContent={
          <OnboardingHeader title="Log In" onClickBack={onClickBack} />
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
        screenContainerProps={{ padding: "50px 16px" }}
      >
        <form ref={formRef} onSubmit={onSubmitForm}>
          <Typography
            size="headline_26"
            containerProps={{ margin: "0 auto", textAlign: "center" }}
          >
            Let's recover you password!
          </Typography>
          <Typography
            size="headline_26"
            weight="semi-bold"
            containerProps={{ margin: "0 auto", textAlign: "center" }}
          >
            What's your email?
          </Typography>
          <CustomInputField
            name="email"
            label="Email"
            bottomMessage={
              forgotPasswordFormData.email.bottomMessage ||
              "Use a valid email address"
            }
            placeHolder="Email"
            error={forgotPasswordFormData.email.error}
            containerProps={{ margin: "16px auto 0 auto" }}
          />
        </form>
      </AppLayout>
    </>
  );
};
