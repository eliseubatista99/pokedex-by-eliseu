import { Route, Routes } from "react-router-dom";
import { Pages } from "@constants";
import {
  LoginOrRegisterScreen,
  Onboarding1Screen,
  Onboarding2Screen,
  RegisterDataScreen,
  RegisterScreen,
  SplashScreen,
} from "@pages";

function App() {
  return (
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
      </Routes>
    </div>
  );
}

export default App;
