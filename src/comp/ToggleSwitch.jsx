import React, { useState, useEffect } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [statusText, setStatusText] = useState("");

  // Update text when switch changes
  useEffect(() => {
    setStatusText(isOn ? "Switch is ON" : "Switch is OFF");
  }, [isOn]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Toggle Switch</h2>

      <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <span style={{ marginRight: "10px" }}>{statusText}</span>

        <div
          style={{
            width: "50px",
            height: "25px",
            backgroundColor: isOn ? "#4caf50" : "#ccc",
            borderRadius: "25px",
            position: "relative",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              width: "23px",
              height: "23px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "1px",
              left: isOn ? "26px" : "1px",
              transition: "0.3s",
            }}
          ></div>
        </div>

        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
