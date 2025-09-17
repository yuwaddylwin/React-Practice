import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <Counter/>
  )
}

function Counter(){
  const [step, stepStep] = useState(0);
  const [count, countStep] = useState(0);

  function minus_S(){
    if (step >= 1) stepStep((s)=> s - 1);
  }

  function plus_S(){
    stepStep((s)=> s + 1);
  }

  function minus_C(){
    countStep((c)=> c - step);
  }
  
  function plus_C(){
    countStep((c)=> c + step)
  }
  // creating a Date object and set it to data
  const date = new Date("Sept 17 2025");
  // update the data 
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      
      <div className="counter">
        <button onClick={minus_S}>-</button>
        <span>Step: {step}</span>
        <button onClick={plus_S}>+</button>
      </div>

      <hr></hr>

      <div className="counter">
        <button onClick={minus_C}>-</button>
        <span>Count: {count}</span>
        <button onClick={plus_C}>+</button>
      </div>

      <div className="counter">
        <span>
          {count === 0 
          ? "Today is "
          :count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was ` }
        </span>
        <span>{date.toDateString()}</span>
      </div>

    </div>
  );
}

