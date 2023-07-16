import { AppScreen, CustomButton } from "@components";
import { useChallenge1Helper } from "./challenge1.hook";

export const Challenge1 = () => {
  const { sayHello } = useChallenge1Helper();

  return (
    <AppScreen header={{ title: "Challenge 1" }}>
      <CustomButton
        text="Say Hello"
        onClick={() => sayHello()}
        styles={{ margin: "auto auto 20px auto" }}
      />
    </AppScreen>
  );
};
