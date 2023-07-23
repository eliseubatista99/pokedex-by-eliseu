import {
  AppLayout,
  CustomInputField,
  OnboardingBottomContent,
  Typography,
} from "@components";
import { useRegisterDataHelper } from "./registerData.hook";

export const RegisterData = () => {
  const { formRef, onSubmitForm, registerFormData, onPointerDownContinue } =
    useRegisterDataHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Create Account",
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
          {"Let's start..."}
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
          name="name"
          label="Name"
          placeHolder="Username"
          bottomMessage={
            registerFormData.name.bottomMessage ||
            "This will be your app nickname"
          }
          error={registerFormData.name.error}
          containerProps={{ margin: "24px auto 0 auto" }}
        />
        <CustomInputField
          name="email"
          label="Email"
          bottomMessage={
            registerFormData.email.bottomMessage || "Use a valid email address"
          }
          placeHolder="Email"
          error={registerFormData.email.error}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
        <CustomInputField
          name="password"
          type="password"
          label="Password"
          placeHolder="Password"
          bottomMessage={
            registerFormData.password.bottomMessage ||
            "Your password must have at least 8 characters"
          }
          error={registerFormData.password.error}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
        <CustomInputField
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeHolder="Confirm Password"
          bottomMessage={registerFormData.confirmPassword.bottomMessage}
          error={registerFormData.confirmPassword.error}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
      </form>
    </AppLayout>
  );
};
