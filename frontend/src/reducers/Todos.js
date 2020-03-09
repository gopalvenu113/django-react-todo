import { GET_TODOS, ADD_TODO, DEL_TODO, TOGGLE_TODO } from "../actions/types";

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload)
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id ?
          Object.assign({}, todo, {completed: ! 
          todo.completed}) : todo
        })
      }
    default:
      return state;
  }
}
