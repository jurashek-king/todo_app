import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({filteredTodos, setAllTodos}) => {
 return (
  <ul>
  {filteredTodos.map((todo) => {
    return <Todo key={todo.id} todo={todo} setAllTodos={setAllTodos} />;
  })}
</ul>
 )
}

export default TodoList;