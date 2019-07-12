import { markTaskAsComplete } from "../../constants/queries";
import { GraphQLClient } from "graphql-request";
import { host } from "../../constants/host";

import GetTodoList from "./GetTodoList";

const MakeComplete = (item, { state, dispatch }) => {
  const { id, completed } = item;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: markTaskAsComplete,
      variables: { id, complete: !completed }
    })
  };
  const client = new GraphQLClient(host, options);
  client
    .request()
    .then(() => GetTodoList({ state, dispatch }))
    .catch(err => dispatch({ type: "ON_FAILURE", payload: err }));
};

export default MakeComplete;
