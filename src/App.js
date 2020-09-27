import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <SearchEngine city="Ulaanbaatar" icon="CLEAR_DAY" temperature={20} />
        </header>
      </div>
    </div>
  );
}

export default App;
