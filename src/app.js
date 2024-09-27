import React, { useState } from "react";
import "./style.css";

function ComponentA({ number, incrementNumber }) {
  return (
    <div className="component-box" style={{ border: "2px solid #ff5722" }}>
      <h2>Component A</h2>
      <div className="number-display">Number: {number}</div>
      <button className="increment-button" onClick={incrementNumber}>
        Click A
      </button>
      
      <ComponentB incrementNumber={incrementNumber} />
    </div>
  );
}

function ComponentB({ incrementNumber }) {
  return (
    <div className="component-box" style={{ border: "2px solid #03a9f4", marginTop: "10px" }}>
      <h2>Component B</h2>
      <button className="increment-button" onClick={incrementNumber}>
        Click B
      </button>
    </div>
  );
}

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
