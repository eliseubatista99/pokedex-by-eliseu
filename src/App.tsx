import { Route, Routes } from "react-router-dom";
import {
  Challenge1,
  Challenge2,
  Challenge2_5,
  HomeScreen,
  Project,
} from "@screens";
import { ScreenPaths } from "@constants";
import React from "react";
import { useHistoryStore } from "@store";
import { useCustomNavigation } from "@hooks";
import { GlobalLoader } from "@components";

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
        <Route path={ScreenPaths.onboarding1} element={<Challenge1 />} />
        <Route path={ScreenPaths.onboarding2} element={<Challenge2 />} />
        <Route path={ScreenPaths.onboarding2} element={<Challenge2_5 />} />
        <Route path={ScreenPaths.onboarding2} element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
