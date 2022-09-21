export const todoReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'addTodo':
            return [...state, action.payload];
        case 'deleteTodo':
            return state.filter(t => t.id !== action.payload)
        case 'toggleTodoState':
            return state.map(t => {
                if (t.id === action.payload) return {
                    ...t,
                    done: !t.done
                }
                return t;
            })
        default:
            return state;
    }
}