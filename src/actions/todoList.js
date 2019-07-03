export function addTodo(todo) {
  return { type: 'ADD_TODO', todo };
}

export function removeTodo(todoId) {
  return { type: 'REMOVE_TODO', todoId };
}

export function filterTodo(filter) {
  return { type: 'FILTER_TODO', filter };
}

export function checkTodo(todoId) {
  return { type: 'CHECK_TODO', todoId };
}
