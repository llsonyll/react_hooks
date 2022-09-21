import TodoRow from "../components/todoRow";
import AddTodo from "../components/addTodo";
import useTodo from "../hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    handleDeleteTodo,
    toggleTodoState,
    handleAddTodo,
    pendingTodos,
    todosCount,
  } = useTodo();
  return (
    <>
      <h1>
        TodoApp {todosCount}
        <small> pendientes: {pendingTodos} </small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {todos.map((t) => {
              return (
                <TodoRow
                  key={t.id}
                  todo={t}
                  toggleState={toggleTodoState}
                  deleteTodo={handleDeleteTodo}
                />
              );
            })}
          </ul>
        </div>

        <div className="col-5">
          <AddTodo handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
