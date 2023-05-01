import {
  CustomButton,
  CustomInputField,
  CustomLink,
  OnboardingHeader,
  Typography,
} from "@components";
import { AppLayout } from "@structure";
import { LoginDataHelperOutputProps } from "./loginData.hook";

export const LoginDataMobileScreen = ({
  LoginFormData,
  formRef,
  onClickBack,
  onClickContinue,
  onClickForgotPassword,
  onSubmitForm,
}: LoginDataHelperOutputProps) => {
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
            Welcome back!
          </Typography>
          <Typography
            size="headline_26"
            weight="semi-bold"
            containerProps={{ margin: "0 auto", textAlign: "center" }}
          >
            Fill in some data!
          </Typography>
          <CustomInputField
            name="email"
            label="Email"
            bottomMessage={
              LoginFormData.email.bottomMessage || "Use a valid email address"
            }
            placeHolder="Email"
            error={LoginFormData.email.error}
            containerProps={{ margin: "16px auto 0 auto" }}
          />
          <CustomInputField
            name="password"
            type="password"
            label="Password"
            placeHolder="Password"
            bottomMessage={
              LoginFormData.password.bottomMessage ||
              "Your password must have at least 8 characters"
            }
            error={LoginFormData.password.error}
            containerProps={{ margin: "16px auto 0 auto" }}
          />
        </form>
        <CustomLink
          middleContent={
            <Typography
              size="body_14"
              color="link"
              containerProps={{ margin: "0 auto", textAlign: "center" }}
            >
              Forgot your password?
            </Typography>
          }
          onClick={onClickForgotPassword}
          containerProps={{ margin: "32px auto 0 auto", fontSize: "14px" }}
        />
      </AppLayout>
    </>
  );
};
