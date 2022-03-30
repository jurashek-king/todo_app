import React from 'react';
import { StyledButton } from '../Todo/TodoStyles';
import { StyledLabel, StyledNav, StyledRadio } from './ToolBarStyles';
import { filteringTodos } from '../../utilities';


const ToolBar = ({setTodoFilter, todoFilter, allTodos, setAllTodos}) => {

  const uncompletedCount = filteringTodos(allTodos, false).length;
  
  const handleChange = (event) => {
    setTodoFilter(event.target.value);
  };

  const deleteCompleted = () => {
    setAllTodos(filteringTodos(allTodos, false))
  }

  return (
    <StyledNav>
      <StyledRadio
        type="radio"
        id="all"
        name="todoFilter"
        value="all"
        onChange={handleChange}
        checked={todoFilter === 'all'}
        />
      <StyledLabel htmlFor="all">All</StyledLabel>
      <StyledRadio
        type="radio"
        id="completed"
        name="todoFilter"
        value="completed"
        onChange={handleChange}
        checked={todoFilter === 'completed'}
        />
      <StyledLabel htmlFor="completed">Completed</StyledLabel>
      <StyledRadio
        type="radio"
        id="uncompleted"
        name="todoFilter"
        value="uncompleted"
        onChange={handleChange}
        checked={todoFilter === 'uncompleted'}
      />
      <StyledLabel htmlFor="uncompleted">Uncompleted</StyledLabel>
      <StyledButton onClick={deleteCompleted}>Clear Completed</StyledButton>
      <p>Uncompleted todos: {uncompletedCount}</p>
    </StyledNav>
  );
};

export default ToolBar;
