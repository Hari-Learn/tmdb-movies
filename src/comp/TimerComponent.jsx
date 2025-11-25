import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);

  // 1️⃣ Runs only once when component mounts
  useEffect(() => {
    console.log("TimerComponent mounted!");
  }, []);

  // 2️⃣ Runs every time 'paused' changes
  useEffect(() => {
    console.log("Paused state changed:", paused);
  }, [paused]);

  // 3️⃣ Optional: simple timer that updates every second
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [paused]); // re-run if 'paused' changes

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
    </div>
  );
}

export default TimerComponent;
