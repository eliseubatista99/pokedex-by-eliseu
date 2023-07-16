import { AppScreen, CustomButton } from "@components";
import { useChallenge2Helper } from "./challenge2.hook";

export const Challenge2 = () => {
  const { sayHello } = useChallenge2Helper();

  return (
    <AppScreen header={{ title: "Challenge 2" }}>
      <CustomButton
        text="Say Hello"
        onClick={() => sayHello()}
        styles={{ margin: "auto auto 20px auto" }}
      />
    </AppScreen>
  );
};
