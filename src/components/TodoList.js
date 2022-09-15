import React from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: lightgray;
`;

function TodoList() {
  return <TodoListContainer>TodoList</TodoListContainer>;
}

export default TodoList;
