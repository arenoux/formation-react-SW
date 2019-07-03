function todoList(state = { tasks: [{ name: 'First Task', done: false }] }, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newAddTodo = state.tasks.slice(0);
      newAddTodo.push({ name: action.todo, done: false });
      return { tasks: newAddTodo };
    case 'REMOVE_TODO':
      const newRemove = state.tasks.slice(0);
      delete newRemove[action.todoId];
      return { tasks: newRemove };
    case 'CHECK_TODO':
      const newCheck = state.tasks.slice(0);
      newCheck[action.todoId].done = !newCheck[action.todoId].done;
      return { tasks: newCheck };
    case 'FILTER_TODO':
      return state;
    default:
      return state;
  }
}
export default todoList;
