import {
  AppLayout,
  CustomButton,
  CustomInputField,
  OnboardingBottomContent,
  Typography,
} from "@components";
import { useLoginDataHelper } from "./loginData.hook";

export const LoginData = () => {
  const {
    formRef,
    onSubmitForm,
    loginFormData,
    onPointerDownContinue,
    onPointerDownForgotPassword,
  } = useLoginDataHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Log In",
      }}
      bottomContent={
        <OnboardingBottomContent
          buttons={[
            {
              type: "primary",
              text: "Continue",
              onPointerDown: onPointerDownContinue,
            },
          ]}
        />
      }
    >
      <form style={{ width: "100%" }} ref={formRef} onSubmit={onSubmitForm}>
        <Typography
          styles={{ textAlign: "center", fontSize: "26px", fontWeight: 800 }}
        >
          {"Welcome back!"}
        </Typography>
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: 400,
            color: "#4D4D4D",
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
        onPointerDown={onPointerDownForgotPassword}
        text="Forgot your password?"
        styles={{ margin: "32px auto 0 auto", fontSize: "14px" }}
      />
    </AppLayout>
  );
};
