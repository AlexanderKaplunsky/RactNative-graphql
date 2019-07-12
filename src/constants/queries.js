export const LIST_TODO = `query ListTodos($orderBy: String!, $ascOrDesc: Boolean!, $filteredByCompleted: Boolean!) {
  ListTodos(orderBy: $orderBy, ascOrDesc: $ascOrDesc, filteredByCompleted: $filteredByCompleted) {
    id
    description
    createdAt
    completed
    priority
  }
}`;

export const updateTask = `mutation updateTask($id: String!, $description: String!, $priority: Int!) {
  updateTask(id: $id, description: $description, priority: $priority)
}`;

export const markTaskAsComplete = `mutation  markTaskAsComplete($id: String!, $complete: Boolean!) {
  markTaskAsComplete(id: $id, complete: $complete)
}`;

export const AddTask = `mutation createTask($description: String!, $complete: Boolean, $priority: Int) {
  createTask(description: $description, complete: $complete, priority: $priority)
}`;

export const deleteTask = `mutation  deleteTask($id: String!) {
  deleteTask(id: $id)
}`;
