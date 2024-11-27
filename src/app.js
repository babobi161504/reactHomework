import React, { useState } from "react";
import "./style.css";
import ComponentA from "./ComponentA";

function App() {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="app-container">
      <h1>React Homework</h1>
      <ComponentA number={number} incrementNumber={incrementNumber} />
    </div>
  );
}

export default App;
