import styled from 'styled-components';

export const Label = styled.label`
  /* display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.space[5]}px; */
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;
export const Input = styled.input`
  margin-top: ${({ theme }) => theme.space[3]}px;
  width: 100%;
`;
export const Button = styled.button``;
