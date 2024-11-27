import React from "react";
import ComponentB from "./ComponentB";

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

export default ComponentA;
