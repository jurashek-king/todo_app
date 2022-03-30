export const filteringTodos = (allTodos, property) => {
  let filteredTodos;
  if (typeof property === 'string') {
    filteredTodos = allTodos.filter(
      (element) => element.id !== property
    );
    return filteredTodos;

  } else if (typeof property === 'boolean') {
    filteredTodos = allTodos.filter(
      (element) => element.completed === property
    );
    return filteredTodos;
  }
};
