import {
  AppLayout,
  CustomInputField,
  OnboardingBottomContent,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";

import { useForgotPasswordHelper } from "./forgotPassword.hook";

export const ForgotPassword = () => {
  const { formRef, onSubmitForm, forgotPasswordFormData, onClickContinue } =
    useForgotPasswordHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Forgot Password",
      }}
    >
      <form style={{ width: "100%" }} ref={formRef} onSubmit={onSubmitForm}>
        <Typography
          styles={{ textAlign: "center", fontSize: "26px", fontWeight: 800 }}
        >
          {"Let's recover you password!"}
        </Typography>
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: 400,
            color: "#4D4D4D",
          }}
        >
          {"What's your email?"}
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
