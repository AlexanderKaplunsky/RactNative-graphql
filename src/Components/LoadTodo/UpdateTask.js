import { updateTask } from "../../constants/queries";
import { GraphQLClient } from "graphql-request";
import { host } from "../../constants/host";

import GetTodoList from "./GetTodoList";

const UpdateTask = ({
  id,
  changedDescription,
  changedPriority,
  state,
  dispatch
}) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: updateTask,
      variables: {
        id: id,
        description: changedDescription,
        priority: changedPriority
      }
    })
  };
  const client = new GraphQLClient(host, options);
  client
    .request()
    .then(() => GetTodoList({ state, dispatch }))
    .catch(err => dispatch({ type: "ON_FAILURE", payload: err }));
};

export default UpdateTask;
