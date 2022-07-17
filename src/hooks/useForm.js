import { useState, useEffect } from "react";

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  return {
    formState,
    onInputChange: ({ target: { value, name } }) =>
      setFormState({
        ...formState,
        [name]: value,
      }),
    reset: () => setFormState(() => initialState),
  };
};

export default useForm;
