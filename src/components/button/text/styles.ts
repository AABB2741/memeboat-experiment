import styled, { css } from "styled-components/native";

export const StyledButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.base}px;
    color: ${theme.colors.fg.onAccent};
  `};
`;
