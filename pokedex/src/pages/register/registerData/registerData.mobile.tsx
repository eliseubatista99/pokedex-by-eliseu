import {
  CustomButton,
  CustomInputField,
  OnboardingHeader,
  Typography,
} from "@components";
import { AppLayout } from "@structure";
import { useState } from "react";
import { useRegisterDataHelper } from "./registerData.hook";

export const RegisterDataMobileScreen = () => {
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
    <>
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
        screenContainerProps={{ paddingTop: "50px", paddingBottom: "50px" }}
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
        <CustomInputField
          label="Name"
          placeHolder="Username"
          bottomMessage={name.bottomMessage || "This will be your app nickname"}
          error={name.error}
          value={name.value}
          onChange={(value) => onFormNameChanged(value)}
          containerProps={{ margin: "24px auto 0 auto" }}
        />
        <CustomInputField
          label="Email"
          bottomMessage={email.bottomMessage || "Use a valid email address"}
          placeHolder="Email"
          value={email.value}
          error={email.error}
          onChange={(value) => onFormEmailChanged(value)}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
        <CustomInputField
          type="password"
          label="Password"
          placeHolder="Password"
          bottomMessage={
            password.bottomMessage ||
            "Your password must have at least 8 characters"
          }
          value={password.value}
          error={password.error}
          onChange={(value) => onFormPasswordChanged(value)}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
        <CustomInputField
          type="password"
          label="Confirm Password"
          placeHolder="Confirm Password"
          bottomMessage={confirmPassword.bottomMessage}
          value={confirmPassword.value}
          error={confirmPassword.error}
          onChange={(value) => onFormConfirmPasswordChanged(value)}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
      </AppLayout>
    </>
  );
};
