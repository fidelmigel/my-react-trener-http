import { useEffect, useState, useRef } from "react";

function UseRefStoreValueExample() {
  const [value, setValue] = useState("");
  const prevStateRef = useRef(value);

  useEffect(() => {
    prevStateRef.current = value;
  });

  return (
    <div>
      <h2>useRef - Previous Value Result</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Current Value: {value}</p>
      <p>Prev value: {prevStateRef.current}</p>
    </div>
  );
}

export default UseRefStoreValueExample;
