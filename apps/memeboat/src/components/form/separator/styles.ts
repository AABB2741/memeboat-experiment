import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.border.primary};
  `}

  height: 1px;
  flex: 1;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.sm}px;
    color: ${theme.colors.fg.secondary};
  `};
`;
