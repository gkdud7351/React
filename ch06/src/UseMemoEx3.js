import React, { useState, useMemo } from "react";

const UseMemoEx3 = () => {
  const [color, setColor] = useState("blue");
  const [number, setNumber] = useState(0);

  const isEven = useMemo(() => {
    console.log("Calculating...");
    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        ></input>
      </div>
      <div>
        <p style={{ color }}>입력한 숫자는 {isEven ? "짝수" : "홀수"}입니다.</p>
      </div>
      <div>
        <button
          onClick={() => {
            setColor("red");
          }}
        >
          red
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          green
        </button>
      </div>
    </div>
  );
};

export default UseMemoEx3;
