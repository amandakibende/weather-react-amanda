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
          href="https://github.com/amandakibende/weather-react-amanda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source
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
