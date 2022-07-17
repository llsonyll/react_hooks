import { useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import { Message } from "./message.jsx";

export const SimpleForm = () => {
  const label = "Strider2";
  const { formState, reset, onInputChange } = useForm({
    username: label,
    email: "",
  });

  const { username, email } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1> Formulario </h1>

        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />

        <input
          type="email"
          className="form-control mt-2"
          placeholder="josep@hotmail.es"
          name="email"
          value={email}
          onChange={onInputChange}
        />

        {username === label && <Message />}

        <input type="submit" value="enviar" />
      </form>
      <button className="btn btn-primary mt-2" onClick={reset}>
        Borrar
      </button>
    </>
  );
};
