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
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #a892ee;
  }
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListContainer>
      {todos.length === 0 ? <h2>할 일을 입력해주세요.</h2> : null}
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
