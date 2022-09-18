import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  border-radius: 16px;
  overflow-y: auto;
  background: white;
`;

function TodoList({ storedTodos }) {
  const todos = useTodoState();

  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
