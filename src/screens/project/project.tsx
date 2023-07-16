import { AppLayout, AppScreen, CustomButton } from "@components";
import { useProjectHelper } from "./project.hook";

export const Project = () => {
  const { sayHello } = useProjectHelper();

  return (
    <AppLayout header={{ type: "default", title: "Project" }}>
      <CustomButton
        text="Say Hello"
        onClick={() => sayHello()}
        styles={{ margin: "auto auto 20px auto" }}
        type={"primary"}
      />
    </AppLayout>
  );
};
