import { Route, Routes } from "react-router-dom";
import { Pages } from "@constants";
import {
  ForgotPasswordScreen,
  LoginDataScreen,
  LoginDoneScreen,
  LoginOrRegisterScreen,
  LoginScreen,
  Onboarding1Screen,
  Onboarding2Screen,
  PokedexScreen,
  RegisterDataScreen,
  RegisterDoneScreen,
  RegisterScreen,
  SplashScreen,
} from "@pages";
import { useAuthContext } from "@contexts";
import { AppLoader } from "@structure";
import { useBaseStore, useUserStore } from "@store";
import React from "react";
import { useCustomNavigation } from "@hooks";

function App() {
  const loader = useBaseStore((state) => state.loader);
  const { goTo } = useCustomNavigation();
  const setBaseStoreState = useBaseStore((state) => state.setPartialState);
  const setUserStoreState = useUserStore((state) => state.setPartialState);
  const { currentUser } = useAuthContext();

  React.useEffect(() => {
    console.log("App started");

    setBaseStoreState({ loader: undefined });

    if (currentUser) {
      setUserStoreState({
        name: currentUser.displayName,
        email: currentUser.email,
      });
      goTo(Pages.pokedex);
    } else {
      goTo(Pages.onboarding1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="App"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <Routes>
          <Route path={Pages.splash} element={<SplashScreen />} />
          <Route
            path={Pages.loginOrRegister}
            element={<LoginOrRegisterScreen />}
          />
          <Route path={Pages.onboarding1} element={<Onboarding1Screen />} />
          <Route path={Pages.onboarding2} element={<Onboarding2Screen />} />
          <Route path={Pages.register} element={<RegisterScreen />} />
          <Route path={Pages.registerData} element={<RegisterDataScreen />} />
          <Route path={Pages.registerDone} element={<RegisterDoneScreen />} />
          <Route path={Pages.login} element={<LoginScreen />} />
          <Route path={Pages.loginData} element={<LoginDataScreen />} />
          <Route
            path={Pages.forgotPassword}
            element={<ForgotPasswordScreen />}
          />
          <Route path={Pages.loginDone} element={<LoginDoneScreen />} />
          <Route path={Pages.pokedex} element={<PokedexScreen />} />
        </Routes>
      </div>
      {loader && (
        <AppLoader loaderStyle={loader.style} loadingText={loader.text} />
      )}
    </>
  );
}

export default App;
