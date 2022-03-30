import React, { useEffect, useState } from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import GlobalStyle from './GlobalStyles';
import ToolBar from './components/ToolBar/ToolBar';
import TodoList from './components/TodoList/TodoList';
import { filteringTodos } from './utilities';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoFilter, setTodoFilter] = useState('all');

  useEffect(() => {
    switch (todoFilter) {
      case 'completed': {
        setFilteredTodos(filteringTodos(allTodos, true));
        break;
      }
      case 'uncompleted': {
        setFilteredTodos(filteringTodos(allTodos, false));
        break;
      }
      default: {
        setFilteredTodos(allTodos);
      }
    }
  }, [allTodos, todoFilter]);

  return (
    <>
      <GlobalStyle />
      <AddTodoForm setAllTodos={setAllTodos} />
      <ToolBar
        setTodoFilter={setTodoFilter}
        setFilteredTodos={setFilteredTodos}
        todoFilter={todoFilter}
        allTodos={allTodos}
        setAllTodos={setAllTodos}
      />
      <TodoList filteredTodos={filteredTodos} setAllTodos={setAllTodos} />
    </>
  );
}

export default App;
