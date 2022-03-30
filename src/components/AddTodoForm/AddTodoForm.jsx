import React from 'react';
import { StyledForm, StyledFormInput } from './AddTodoFormStyles';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const AddTodoForm = ({ setAllTodos }) => {
  const initialState = {
    id: '',
    value: '',
    completed: false,
  };
  const [todo, setTodo] = useState(initialState);

  const handleChange = (event) => {
    setTodo({ ...todo, value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTodos((prevState) => [...prevState, { ...todo, id: nanoid() }]);
    setTodo(initialState);
  };

  return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormInput
          type="text"
          name="addTodo"
          id="addTodo"
          value={todo.value}
          placeholder="Your todo"
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </StyledForm>
  );
};

export default AddTodoForm;
