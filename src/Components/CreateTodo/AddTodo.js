import { AddTask } from "../../constants/queries";
import { GraphQLClient } from "graphql-request";
import { host } from "../../constants/host";

import GetTodoList from "../LoadTodo/GetTodoList";

const AddTodo = (description, { state, dispatch }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: AddTask,
      variables: { description, complete: false, priority: 1 }
    })
  };
  const client = new GraphQLClient(host, options);
  client
    .request()
    .then(() => GetTodoList({ state, dispatch }))
    .catch(err => dispatch({ type: "ON_FAILURE", payload: err }));
};

export default AddTodo;
