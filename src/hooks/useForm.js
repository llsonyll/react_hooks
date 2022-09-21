import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  return {
    formState,
    ...formState,
    onInputChange: ({ target: { value, name } }) =>
      setFormState({
        ...formState,
        [name]: value,
      }),
    reset: () => setFormState(() => initialState),
  };
};
