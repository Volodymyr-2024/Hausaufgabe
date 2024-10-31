import { useState } from "react";
import ValueDisplay from "./components/ValueDisplay";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <hr />
      <div className="input_container">
        <h1>Current and Previos Value</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            console.log(e);

            setValue(e.target.value);
          }}
        />
        <ValueDisplay value={value} />
      </div>
    </div>
  );
}

export default App;
