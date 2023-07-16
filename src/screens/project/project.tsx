import { AppScreen, CustomButton } from "@components";
import { useProjectHelper } from "./project.hook";

export const Project = () => {
  const { sayHello } = useProjectHelper();

  return (
    <AppScreen header={{ title: "Project" }}>
      <CustomButton
        text="Say Hello"
        onClick={() => sayHello()}
        styles={{ margin: "auto auto 20px auto" }}
      />
    </AppScreen>
  );
};
