import {
  AppLayout,
  CustomInputField,
  OnboardingBottomContent,
  Typography,
} from "@components";
import { useUpdatePasswordHelper } from "./updatePassword.hook";

export const UpdatePassword = () => {
  const { formRef, onSubmitForm, formData, onClickContinue } =
    useUpdatePasswordHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Update email",
      }}
    >
      <form style={{ width: "100%" }} ref={formRef} onSubmit={onSubmitForm}>
        <Typography
          styles={{ textAlign: "center", fontSize: "19.5px", fontWeight: 800 }}
        >
          {"Let's update"}
        </Typography>
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "19.5px",
            fontWeight: 400,
            color: "#4D4D4D",
          }}
        >
          {"What's your new password?"}
        </Typography>
        <CustomInputField
          name="password"
          type="password"
          label="Password"
          placeHolder="Password"
          bottomMessage={
            formData.password.bottomMessage ||
            "Your password must have at least 8 characters"
          }
          error={formData.password.error}
          containerProps={{ margin: "12px auto 0 auto" }}
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
