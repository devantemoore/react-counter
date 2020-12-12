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
        <h3 className="title">Counter</h3>
        <h1 className="data">{counter}</h1>
        <button className="button" onClick={AddCounter}>Click</button>
    </div>
    );
};

export default Counter;
