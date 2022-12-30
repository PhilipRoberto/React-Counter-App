import React, { useState } from "react";
function App() {
  const [state, setState] = useState("0");
  const increment = () => {
    setState(state + 1);
  }
  const decrement = () => {
    setState(state - 1);
  }
  const reset = () => {
    setState(0);
  }

  

  return (
    <div className="App">
      <h1 className="count">
        Count: {state}
      </h1>
      <button className="btn btn-dec" onClick={decrement}>
        decrease
      </button>
      <button className="btn btn-res" onClick={reset}>
        reset
      </button>
      <button className="btn btn-inc" onClick={increment}>
        increase
      </button>
    </div>
  );
}
export default App;