import {
  AppLayout,
  CustomButton,
  CustomInputField,
  OnboardingBottomContent,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useLoginDataHelper } from "./loginData.hook";

export const LoginData = () => {
  const {
    formRef,
    onSubmitForm,
    loginFormData,
    onClickContinue,
    onClickForgotPassword,
  } = useLoginDataHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Log In",
        stepsToGoBack: 2,
      }}
    >
      <form style={{ width: "100%" }} ref={formRef} onSubmit={onSubmitForm}>
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: 800,
            margin: "0 auto",
          }}
        >
          {"Welcome back!"}
        </Typography>
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: 400,
            color: "#4D4D4D",
            margin: "0 auto",
          }}
        >
          {"Fill in some data!"}
        </Typography>
        <CustomInputField
          name="email"
          label="Email"
          bottomMessage={
            loginFormData.email.bottomMessage || "Use a valid email address"
          }
          placeHolder="Email"
          error={loginFormData.email.error}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
        <CustomInputField
          name="password"
          type="password"
          label="Password"
          placeHolder="Password"
          bottomMessage={
            loginFormData.password.bottomMessage ||
            "Your password must have at least 8 characters"
          }
          error={loginFormData.password.error}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
      </form>
      <CustomButton
        type={"ghost"}
        onClick={onClickForgotPassword}
        text="Forgot your password?"
        styles={{ margin: "32px auto 0 auto", fontSize: "14px" }}
      />
      <OnboardingBottomContent
        buttons={[
          {
            type: "primary",
            text: "Continue",
            onClick: onClickContinue,
          },
        ]}
      />
    </AppLayout>
  );
};
