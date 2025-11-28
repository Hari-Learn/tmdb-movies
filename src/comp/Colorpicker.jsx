import React, { useState, useEffect } from "react";

const Colorpicker = () => {
  const [color, setColor] = useState("#00aaff");
  const [text, setText] = useState("");

  // Example hook: whenever color changes, update text
  useEffect(() => {
    setText(`You selected: ${color}`);
  }, [color]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Color Picker</h2>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{
          width: "60px",
          height: "40px",
          border: "none",
          cursor: "pointer",
        }}
      />

      <p>{text}</p>

      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "8px",
          backgroundColor: color,
          border: "1px solid #ddd",
          marginTop: "10px",
        }}
      />
    </div>
  );
};

export default Colorpicker;
