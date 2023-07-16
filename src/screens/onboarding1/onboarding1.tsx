import { AppLayout, CustomButton } from "@components";
import { useChallenge1Helper } from "./onboarding1.hook";

export const Challenge1 = () => {
  const { sayHello } = useChallenge1Helper();

  return (
    <AppLayout header={{ type: "default", title: "Challenge 1" }}>
      <CustomButton
        text="Say Hello"
        onClick={() => sayHello()}
        styles={{ margin: "auto auto 20px auto" }}
        type={"primary"}
      />
    </AppLayout>
  );
};
