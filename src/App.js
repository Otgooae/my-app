import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <SearchEngine city="Ulaanbaatar" />
        </header>
      </div>
    </div>
  );
}
export default App;
