import React, { useState, useEffect } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(50);
  const [label, setLabel] = useState("");

  // Update label when value changes
  useEffect(() => {
    setLabel(`Current value: ${value}`);
  }, [value]);

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h2>Range Slider</h2>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          width: "100%",
          cursor: "pointer"
        }}
      />

      <p>{label}</p>

      <div
        style={{
          width: "100%",
          height: "20px",
          background: `linear-gradient(to right, #4caf50 ${value}%, #ddd ${value}%)`,
          borderRadius: "4px",
          marginTop: "10px"
        }}
      />
    </div>
  );
};

export default RangeSlider;
