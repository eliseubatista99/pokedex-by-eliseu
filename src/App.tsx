import { Route, Routes } from "react-router-dom";
import {
  Onboarding1,
  Onboarding2,
  LoginOrRegister,
  HomeScreen,
  Register,
  RegisterData,
  RegisterDone,
  Login,
  LoginData,
} from "@screens";
import { ScreenPaths } from "@constants";
import React from "react";
import { useBaseStore, useHistoryStore } from "@store";
import { useCustomNavigation } from "@hooks";

export const App = () => {
  const { goTo } = useCustomNavigation();
  const { history } = useHistoryStore();
  const { setLoading } = useBaseStore();

  React.useEffect(() => {
    console.log("App started");

    if (history.length < 1) {
      goTo(ScreenPaths.splash);
    }

    setLoading({
      isLoading: false,
      loadingText: undefined,
    });

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
        <Route path={ScreenPaths.registerDone} element={<RegisterDone />} />
        <Route path={ScreenPaths.login} element={<Login />} />
        <Route path={ScreenPaths.loginData} element={<LoginData />} />
      </Routes>
    </div>
  );
};

export default App;
