const initialState = [{
    id: 1,
    todo: 'Realizar un gank al mid-player enemigo',
    done: false
}]

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        default:
            return state;
    }

}

let todos = todoReducer();
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Comprar wards para la linea de bot',
    done: false
}

const addTodoAction = {
    type: 'ADD_TODO',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log(todos);