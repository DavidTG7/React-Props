import styled from "styled-components";

export const MainButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 4px 10px;
  font-size: 14px;
  margin: 4px 10px;
  color: ${({ red, green, lightblue }) =>
    red ? "red" : green ? "green" : lightblue ? "lightblue" : "deepPink"};
`;
