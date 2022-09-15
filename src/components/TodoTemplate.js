import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;
  margin: 96px auto 32px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function TodoTemplate({ children }) {
  return <Container>{children}</Container>;
}

export default TodoTemplate;
