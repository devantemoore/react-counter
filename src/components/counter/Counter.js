import React, { useState } from "react";
import './style.css'


const Counter = () => {
  const [counter, setCounter] = useState(0);
  const AddCounter = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  return (
    <div className="counter-container">
        <h3>Counter</h3>
        <h1>{counter}</h1>
        <button onClick={AddCounter}>Click</button>
    </div>
    );
};

export default Counter;
