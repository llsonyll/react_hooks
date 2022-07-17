import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);

  return {
    counter,
    increase: (value = 1) => setCounter((prev) => prev + value),
    decrease: (value = 1) => {
      if (counter === 0) return;
      setCounter((prev) => prev - value);
    },
    reset: () => setCounter(() => initialState),
  };
};
