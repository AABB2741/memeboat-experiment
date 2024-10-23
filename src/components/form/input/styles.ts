import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.secondary};
    border: 1px solid ${theme.colors.border.primary};
  `};

  border-radius: 8px;
  overflow: hidden;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  ${({ theme }) => css`
    border-right-width: 1px;
    border-color: ${theme.colors.border.primary};
  `};

  padding: 0 12px;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.fg.placeholder,
}))`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.base}px;
    color: ${theme.colors.fg.primary};
  `};

  flex: 1;
  padding: 8px 12px;
`;
