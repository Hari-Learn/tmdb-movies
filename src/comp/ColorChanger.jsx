import React, { useState, useEffect } from "react";

function ColorChanger() {
  const [color, setColor] = useState("red");

  // 1️⃣ Runs only once when the component mounts
  useEffect(() => {
    console.log("Component mounted. Initial color:", color);
  }, []);

  // 2️⃣ Runs every time 'color' changes
  useEffect(() => {
    console.log("Color changed to:", color);
  }, [color]);

  return (
    <div>
      <h2 style={{ color }}>This text changes color!</h2>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("red")}>Red</button>
    </div>
  );
}

export default ColorChanger;
