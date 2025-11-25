import React, { useState, useEffect } from "react";

function UseEffectEx() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1️⃣ useEffect with empty dependency array []
  useEffect(() => {
    console.log("This runs only once when the component mounts!");
  }, []);

  // 2️⃣ useEffect with dependencies [count]
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);

  return (
    <div>
      <h1>Hello, {name || "Stranger"}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseEffectEx;
