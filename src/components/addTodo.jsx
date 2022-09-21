import { useState } from "react";
import { useForm } from "./../hooks/useForm";

const AddTodo = ({ handleAddTodo }) => {
  const { description, onInputChange, reset } = useForm({
    description: "",
  });

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    handleAddTodo({
      id: new Date().getTime(),
      todo: description,
      done: false,
    });
    reset();
  };

  return (
    <>
      <h4> Add Todo </h4>
      <hr />
      <form onSubmit={handleAddTodoSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="What to do?"
        />
        <button className="btn btn-outline-primary mt-2" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default AddTodo;
