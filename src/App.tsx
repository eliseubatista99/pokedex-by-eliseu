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
  LoginDone,
  ForgotPassword,
  Account,
  UpdateEmail,
  UpdateName,
  UpdatePassword,
  Favorites,
} from "@screens";
import { ScreenPaths } from "@constants";
import React from "react";
import { useCustomNavigation } from "@hooks";
export const App = () => {
  const { currentPath, replaceHistory, goTo } = useCustomNavigation();

  const appInitialized = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (!appInitialized.current) {
      if (currentPath !== ScreenPaths.splash) {
        replaceHistory([]);
        goTo(ScreenPaths.splash, false);
      }

      appInitialized.current = true;
    }
  }, [currentPath, goTo, replaceHistory]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
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
        <Route path={ScreenPaths.loginDone} element={<LoginDone />} />
        <Route path={ScreenPaths.forgotPassword} element={<ForgotPassword />} />
        <Route path={ScreenPaths.favorites} element={<Favorites />} />
        <Route path={ScreenPaths.account} element={<Account />} />
        <Route path={ScreenPaths.updateEmail} element={<UpdateEmail />} />
        <Route path={ScreenPaths.updateName} element={<UpdateName />} />
        <Route path={ScreenPaths.updatePassword} element={<UpdatePassword />} />
      </Routes>
    </div>
  );
};

export default App;
