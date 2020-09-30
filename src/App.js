import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <SearchEngine />
        </header>
        <div className="gitLink">
          <a
            href="https://github.com/Otgooae/my-app.git"
            rel="noopener noreferrer"
          >
            Open source code by Otgoo Altangerel
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
