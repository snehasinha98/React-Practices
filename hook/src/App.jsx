import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);

  const addValue = () => {
    if (count !== 20) {
      setCount(count + 1);
    }
  };

  const removeValue = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Hello this is Sneha</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={addValue}>Add value {count}</button>
      <br />
      <button onClick={removeValue}>Remove value{count}</button>
    </>
  );
}

export default App;
