import { Route, Routes } from "react-router-dom";
import {
  Onboarding1,
  Onboarding2,
  LoginOrRegister,
  HomeScreen,
  Register,
} from "@screens";
import { ScreenPaths } from "@constants";
import React from "react";
import { useHistoryStore } from "@store";
import { useCustomNavigation } from "@hooks";
import { GlobalLoader } from "@components";
import { RegisterData } from "./screens/registerData";

export const App = () => {
  const { goTo } = useCustomNavigation();
  const { history } = useHistoryStore();

  React.useEffect(() => {
    console.log("App started");

    if (history.length < 1) {
      goTo(ScreenPaths.splash);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        // overflow: "hidden",
      }}
    >
      <Routes>
        <Route path={ScreenPaths.splash} element={<HomeScreen />} />
        <Route path={ScreenPaths.onboarding1} element={<Onboarding1 />} />
        <Route path={ScreenPaths.onboarding2} element={<Onboarding2 />} />
        <Route
          path={ScreenPaths.loginOrRegister}
          element={<LoginOrRegister />}
        />
        <Route path={ScreenPaths.register} element={<Register />} />
        <Route path={ScreenPaths.registerData} element={<RegisterData />} />
      </Routes>
    </div>
  );
};

export default App;
