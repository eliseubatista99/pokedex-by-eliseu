import { AppScreen, CustomButton } from "@components";
import { useChallenge2_5Helper } from "./challenge2_5.hook";

export const Challenge2_5 = () => {
  const { sayHello } = useChallenge2_5Helper();

  return (
    <AppScreen header={{ title: "Challenge 2_5" }}>
      <CustomButton
        text="Say Hello"
        onClick={() => sayHello()}
        styles={{ margin: "auto auto 20px auto" }}
      />
    </AppScreen>
  );
};
