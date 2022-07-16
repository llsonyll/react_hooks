import { useState } from "react";

export const useStateCounter = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const handleCounter1Change = () => {
    setCounter({
      counter1: counter1 + 1,
      counter2,
      counter3,
    });
  };

  return (
    <div className="useStateHook">
      <h4> Counter1: {counter1} </h4>
      <h4> Counter2: {counter2} </h4>
      <h4> Counter3: {counter3} </h4>
      <hr />
      <button onClick={handleCounter1Change}> + 1</button>
    </div>
  );
};
