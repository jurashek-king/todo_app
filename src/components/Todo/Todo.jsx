import React, { useState } from 'react';
import { filteringTodos } from '../../utilities';
import {
  StyledButton,
  StyledTodo,
  StyledParagraph,
  StyledTextarea,
} from './TodoStyles';


const Todo = ({ todo, setAllTodos }) => {
  const [changedTodo, setChangedTodo] = useState(todo.value);
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleDelete = () => {
    setAllTodos(prevState => {
      return filteringTodos(prevState, todo.id);
    })
  };

  const toggleCompletion = () => {
    setAllTodos((prevState) => {
      const newState = prevState.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      });
      return newState;
    });
  };

  const handleEdit = (event) => {
    setChangedTodo(event.target.value)
  }

  const handleUpdate = () => {
    setAllTodos(prevState => {
      const newState = prevState.map((element) => {
        if (element.id === todo.id) {
          return { ...element, value: changedTodo };
        }
        return element;
      });
      return newState;
    })
    setIsEditable(!isEditable);
  }

  const handleDiscard = () => {
    setIsEditable(!isEditable);
    setChangedTodo(todo.value);
  }

  const nonEditButtons = (
    <div>
      <StyledButton onClick={toggleCompletion}>OK</StyledButton>
      <StyledButton onClick={handleDelete}>Del</StyledButton>
      <StyledButton onClick={toggleEdit}>Edit</StyledButton>
    </div>
  );

  const editButtons = (
    <div>
      <StyledButton onClick={handleUpdate}>Done</StyledButton>
      <StyledButton onClick={handleDiscard}>Discard</StyledButton>
    </div>
  );

  return (
    <StyledTodo>
      {isEditable ? (
        <>
          <StyledTextarea isCompleted={todo.completed} value={changedTodo} onChange={handleEdit}/>
          {editButtons}
        </>
      ) : (
        <>
          <StyledParagraph isCompleted={todo.completed}>
            {todo.value}
          </StyledParagraph>
          {nonEditButtons}
        </>
      )}
    </StyledTodo>
  );
};

export default Todo;
