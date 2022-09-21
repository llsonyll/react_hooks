const TodoRow = ({ todo, toggleState, deleteTodo }) => {
  const rowStyle = {
    backgroundColor: todo.done ? "#b1b1b1" : "",
  };

  const spanStyle = {
    display: "block",
    width: "300px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        todo.done ? "text-decoration-line-through" : ""
      }`}
    >
      {/* style={rowStyle} */}
      <span className="align-self-center" style={spanStyle}>
        {todo.todo}
      </span>
      <div className="actions ">
        <button
          className="btn-primary m-2"
          onClick={() => toggleState(todo.id)}
        >
          {todo.done ? "Desmarcar" : "Terminar"}
        </button>
        <button className="btn-danger" onClick={() => deleteTodo(todo.id)}>
          Borrar
        </button>
      </div>
    </li>
  );
};

export default TodoRow;
