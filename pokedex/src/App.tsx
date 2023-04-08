import { Route, Routes } from "react-router-dom";
import { Pages } from "./constants";
import {
  LoginOrRegisterScreen,
  Onboarding1Screen,
  SplashScreen,
} from "./pages";

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
      </Routes>
    </div>
  );
}

export default App;
