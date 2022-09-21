import { useReducer, useEffect } from "react";
import { todoReducer } from "./../08-useReducer/todoReducer";

const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return {
        todos,
        handleDeleteTodo: (id) => dispatch({
            type: "deleteTodo",
            payload: id,
        }),
        toggleTodoState: (id) => dispatch({
            type: "toggleTodoState",
            payload: id,
        }),
        handleAddTodo: (todo) => dispatch({
            type: "addTodo",
            payload: todo,
        }),
        pendingTodos: todos.filter((t) => !t.done).length,
        todosCount: todos.length,
    }

}

export default useTodo