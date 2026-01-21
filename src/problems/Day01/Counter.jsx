import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
    <div>
      <h1>React Counter App</h1>
      <h2>Counter: {counter} </h2>
      <button onClick={() => setCounter((counter) => counter + 1)} >
        Increment
      </button>
      <button onClick={() => setCounter((counter) => counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
    )
}

export default Counter;