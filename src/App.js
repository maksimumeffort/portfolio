import "./App.modules.scss";
import { Header } from "./containers/Header/Header";
import { Body } from "./containers/Body/Body";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <main className="app-main">
        <Body />
      </main>
    </div>
  );
}

export default App;
