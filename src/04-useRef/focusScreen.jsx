import { useRef } from "react";

export const FocusScreen = () => {
  const inputName = useRef();

  const setFocus = () => {
    // document.querySelector('input').select();
    // console.log(inputName);
    inputName.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <br />

      <input
        ref={inputName}
        type="text"
        name="name"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button onClick={setFocus} className="btn btn-primary mt-5">
        Set Focus
      </button>
    </>
  );
};
