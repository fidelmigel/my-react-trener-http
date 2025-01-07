import { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false);

  // Hard Logic
  const heavyComputer = (num) => {
    console.log("heavyComputer called");
    let i = 0;
    while (i < 1_000_000_000) i++;
    return num * num;
  };

  const result = useMemo(() => {
    return heavyComputer(count);
  }, [count]);

  const styles = {
    color: colored ? "tomato" : "black",
  };

  return (
    <div>
      <h2>UseMemo Example</h2>
      <p style={styles}>Result: {result}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button
        onClick={() => {
          console.log("change color");
          setColored((prev) => !prev);
        }}
      >
        Change color
      </button>
    </div>
  );
}

export default UseMemoExample;
