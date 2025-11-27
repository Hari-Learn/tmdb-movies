import React, { useLayoutEffect, useRef, useState } from "react";

export default function BoxMeasurement() {
  const boxRef = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setBoxSize({ width, height });
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useLayoutEffect Demo</h2>
      <p>
        This component measures the box size <strong>before</strong> the browser
        paints the screen.
      </p>

      <div
        ref={boxRef}
        style={{
          width: "250px",
          height: "120px",
          backgroundColor: "#711a36",
          color: "#fff",
          padding: "15px",
          borderRadius: "8px"
        }}
      >
        <p>Burgundy Box</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <strong>Measured Size:</strong>
        <p>Width: {boxSize.width}px</p>
        <p>Height: {boxSize.height}px</p>
      </div>
    </div>
  );
}
