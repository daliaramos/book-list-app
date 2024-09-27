import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const incramentCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={incramentCounter}>click</button>
      <p>count: {count}</p>
    </div>
  );
};

export default Counter;
