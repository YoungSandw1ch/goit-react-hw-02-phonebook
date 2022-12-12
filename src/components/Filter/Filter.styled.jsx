import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  column-gap: ${({ theme }) => theme.space[3]}px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.greyFontColor};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.text.caps.customLetterSpacing};
`;

export const Input = styled.input`
  width: ${({ theme }) => theme.sizes.full};
  height: ${({ theme }) => theme.sizes.inputHeight};

  border-radius: ${({ theme }) => theme.radii.medium};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.greyFontColor};
`;
