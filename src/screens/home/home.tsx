import { AppScreen, CustomButton } from "@components";
import { useHomeHelper } from "./home.hook";

export const HomeScreen = () => {
  const { goToChallenge1, goToChallenge2, goToChallenge2_5, goToProject } =
    useHomeHelper();

  return (
    <AppScreen header={{ title: "Home", hideBack: true }}>
      <CustomButton
        text="Challenge 1"
        onClick={() => goToChallenge1()}
        styles={{ margin: "0 auto 20px auto" }}
      />
      <CustomButton
        text="Challenge 2"
        onClick={() => goToChallenge2()}
        styles={{ margin: "20px auto 20px auto" }}
      />
      <CustomButton
        text="Challenge 2.5"
        onClick={() => goToChallenge2_5()}
        styles={{ margin: "20px auto 20px auto" }}
      />
      <CustomButton
        text="Project"
        onClick={() => goToProject()}
        styles={{ margin: "20px auto 20px auto" }}
      />
    </AppScreen>
  );
};
