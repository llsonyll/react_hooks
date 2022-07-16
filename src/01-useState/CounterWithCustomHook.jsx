import useCounter from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increase, decrease, reset } = useCounter(20);

  return (
    <div>
      <h1>Counter with hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increase()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrease(10)}>
        -1
      </button>
    </div>
  );
};
