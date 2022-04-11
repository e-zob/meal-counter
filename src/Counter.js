function Counter(props) {
  function handleCounter() {
    return props.updateCount(props.name);
  }

  return (
    <div className="option-wrapper">
      <button onClick={handleCounter}>{props.name}</button>
      <span>{props.counter}</span>
    </div>
  );
}

export default Counter;
