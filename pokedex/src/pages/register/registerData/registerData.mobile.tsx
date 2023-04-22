import {
  CustomButton,
  CustomInputField,
  OnboardingHeader,
  Typography,
} from "@components";
import { AppLayout } from "@structure";
import { RegisterDataHelperOutputProps } from "./registerData.hook";

export const RegisterDataMobileScreen = ({
  registerFormData,
  formRef,
  onClickBack,
  onClickContinue,
  onSubmitForm,
}: RegisterDataHelperOutputProps) => {
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
        screenContainerProps={{ padding: "50px 16px" }}
      >
        <form ref={formRef} onSubmit={onSubmitForm}>
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
              registerFormData.email.bottomMessage ||
              "Use a valid email address"
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
    </>
  );
};
