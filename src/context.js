import { createContext } from "react";

const Context = createContext({
  todoList: null,
  isCompleted: false,
  sort: false,
  status: null,
  error: null
});

export default Context;
