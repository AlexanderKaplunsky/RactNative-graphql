export default function reducer(state, { type, payload }) {
  switch (type) {
    case "LOAD_TODO_LIST":
      return {
        ...state,
        todoList: payload
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: payload
      };
    case "SET_COMPLETED":
      return {
        ...state,
        isCompleted: payload
      };
    case "SET_SORT":
      return {
        ...state,
        sort: payload
      };
    default:
      return state;
  }
}
