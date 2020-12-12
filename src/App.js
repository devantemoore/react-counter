import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const AddCounter = () => {
    console.log(counter)
    setCounter(counter + 1);
  }
  return (
    <div>
      Counter: {counter}
      <button onClick={AddCounter}>Click Me</button>
    </div>);
}

export default App;
