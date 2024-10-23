import styled, { css } from "styled-components/native";

export const StyledFormLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.base}px;
    color: ${theme.colors.fg.primary};
  `};
`;
