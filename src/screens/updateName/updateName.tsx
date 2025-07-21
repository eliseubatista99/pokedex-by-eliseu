import {
  AppLayout,
  CustomInputField,
  OnboardingBottomContent,
} from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useUpdateNameHelper } from "./updateName.hook";

export const UpdateName = () => {
  const { formRef, onSubmitForm, formData, onClickContinue } =
    useUpdateNameHelper();

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
          {"What's your new name?"}
        </Typography>
        <CustomInputField
          name="name"
          label="Name"
          bottomMessage={formData.name.bottomMessage || "Use a valid name"}
          placeHolder="Name"
          error={formData.name.error}
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
