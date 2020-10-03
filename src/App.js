import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchEngine defaultCity="Ulaanbaatar" />
        </header>
        <footer className="gitLink">
          Open source{" "}
          <a
            href="https://github.com/Otgooae/my-app.git"
            rel="noopener noreferrer"
            target="_blank"
          >
            code
          </a>
          by Otgoo Altangerel
        </footer>
      </div>
    </div>
  );
}
export default App;
