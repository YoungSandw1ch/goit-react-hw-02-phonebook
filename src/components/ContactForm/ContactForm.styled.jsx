import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.greyFontColor};
  letter-spacing: 3px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;

  :focus-within {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const Input = styled.input`
  margin-top: ${({ theme }) => theme.space[2]}px;
  width: ${({ theme }) => theme.sizes.full};
  height: ${({ theme }) => theme.sizes.inputHeight};
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.greyFontColor};
  outline: none;

  :focus {
    border-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 35px;

  margin: 0 auto;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;

  font-size: ${({ theme }) => theme.fontSizes.m};

  border-radius: ${({ theme }) => theme.radii.normal};
  border: none;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
