import "./App.css";
import Header from "./Header";
import Counter from "./Counter";
import { useState } from "react";
import mealOptions from "./data/data.js";

function App() {
  const [count, setCount] = useState(initializeCount());

  function updateCount(optionName) {
    let currentCount = { ...count };
    currentCount[optionName] = currentCount[optionName] + 1;
    setCount(currentCount);
  }

  function initializeCount() {
    let countRecord = {};
    for (const option of mealOptions) {
      countRecord[option.name] = 0;
    }
    return countRecord;
  }
  function createOptions() {
    return (
      <div className="options-wrapper">
        {mealOptions.map((option) => (
          <Counter key={option.name.toLowerCase()} name={option.name} counter={count[option.name]} updateCount={updateCount} />
        ))}
      </div>
    );
  }
  return (
    <div className="app-wrapper">
      <Header />
      {createOptions()}
    </div>
  );
}

export default App;
