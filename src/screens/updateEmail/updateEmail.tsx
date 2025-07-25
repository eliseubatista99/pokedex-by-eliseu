import {
  AppLayout,
  CustomInputField,
  OnboardingBottomContent,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useUpdateEmailHelper } from "./updateEmail.hook";

export const UpdateEmail = () => {
  const { formRef, onSubmitForm, formData, onClickContinue } =
    useUpdateEmailHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Update email",
      }}
    >
      <form style={{ width: "100%" }} ref={formRef} onSubmit={onSubmitForm}>
        <Typography
          styles={{ textAlign: "center", fontSize: "26px", fontWeight: 800 }}
        >
          {"Let's update"}
        </Typography>
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: 400,
            color: "#4D4D4D",
          }}
        >
          {"What's your new email?"}
        </Typography>
        <CustomInputField
          name="email"
          label="Email"
          bottomMessage={
            formData.email.bottomMessage || "Use a valid email address"
          }
          placeHolder="Email"
          error={formData.email.error}
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
