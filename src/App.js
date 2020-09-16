import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Paris" />
      </div>
      <small>
        <a
          href="https://codesandbox.io/s/meteo-react-2wl1m?file=/src/App.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codesandbox source
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/amandakibende"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Amanda KIBENDE
        </a>
      </small>
    </div>
  );
}
