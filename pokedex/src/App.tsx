import { AppLayout } from "./structure";

function App() {
  return (
    <div
      className="App"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <AppLayout withoutNavigation>
        <p>OLA</p>
      </AppLayout>
    </div>
  );
}

export default App;
