import React from "react";

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

export default ComponentB;
