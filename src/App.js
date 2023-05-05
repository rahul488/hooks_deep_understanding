import "./styles.css";
import { useState, useEffect } from "react";
import useTest from "../useTest";

export default function App() {
  const [open, setopen] = useState(false);
  const [isTest, setTest] = useState(false);
  const { test, triggerTest } = useTest(isTest);

  useEffect(() => {
    let x = true;
    console.log("hiii");
    return () => {
      x = false;
      console.log("hlwww");
    };
  }, [open]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setopen(!open)}>Click me</button>
      <h4>{test}</h4>
      <button onClick={() => setTest(!isTest)}>Trigger Test</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
