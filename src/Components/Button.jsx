import React from "react";
import { css, styled } from "styled-components";

const ButtonStyled = styled.button`
  outline: 0;
  border: 0;
  color: #fff;
  padding: 0.8rem 2.2rem;
  border-radius: 0.5rem;
  background-color: #4169e1;
  ${(props) =>
    props.type === "nav" &&
    css`
      padding: 0.6rem 1.8rem;
    `}
`;

export default function Button({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}
