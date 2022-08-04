import styled from 'styled-components';

export const MainButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 4px 10px;
  font-size: 14px;
  margin: 4px 10px;
  color: ${({red}) => red ? 'red' : 'green'}
`;

