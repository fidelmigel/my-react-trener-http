import { useState, useRef, useEffect } from "react";

function UseRefRenderCountExample() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(renderCount.current);

    renderCount.current++;
  });

  return (
    <div>
      {" "}
      <h2>useRef - Count of renders</h2> <p>Counter: {count}</p>{" "}
      <button onClick={() => renderCount.current++}>UPDATE REF NOW!!!</button>{" "}
      <input type="text" onChange={(e) => setValue(e.target.value)} />{" "}
      <p>Counter was rendered: {renderCount.current} times</p>{" "}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>{" "}
      <button onClick={() => inputRef.current.click()}>Open File</button>{" "}
      <input ref={inputRef} style={{ visibility: "hidden" }} type="file" />{" "}
    </div>
  );
}

export default UseRefRenderCountExample;
