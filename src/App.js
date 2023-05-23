import "./App.modules.scss";
import { Header } from "./containers/Header/Header";
import { Body } from "./containers/Body/Body";
import { useState } from "react";

const App = () => {
  const [showStats, setShowStats] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <Header
          showStats={showStats}
          showAbout={showAbout}
          setShowStats={setShowStats}
          setShowAbout={setShowAbout}
        />
      </header>
      <main className="app-main">
        <Body showStats={showStats} showAbout={showAbout} />
      </main>
    </div>
  );
};

export default App;
