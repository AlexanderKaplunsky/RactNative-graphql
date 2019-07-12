import { LIST_TODO } from "../../constants/queries";
import { GraphQLClient } from "graphql-request";
import { host } from "../../constants/host";

const GetTodoList = ({ state, dispatch }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: LIST_TODO,
      variables: {
        orderBy: "priority",
        ascOrDesc: state.sort,
        filteredByCompleted: state.isCompleted
      }
    })
  };
  const client = new GraphQLClient(host, options);
  client
    .request()
    .then(data => dispatch({ type: "LOAD_TODO_LIST", payload: data.ListTodos }))
    .catch(err => dispatch({ type: "ON_FAILURE", payload: err }));
};
export default GetTodoList;
