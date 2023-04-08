import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./structure";
import { Pages } from "./constants";
import { LoginOrRegisterScreen, SplashScreen } from "./pages";

function App() {
  return (
    <div
      className="App"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Routes>
        <Route path={Pages.splash} element={<SplashScreen />}></Route>
        <Route
          path={Pages.loginOrRegister}
          element={<LoginOrRegisterScreen />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
