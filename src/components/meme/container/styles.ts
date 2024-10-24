import styled, { css } from "styled-components/native";

export const StyledMemeContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.primary};
  `};

  flex: 1;
  justify-content: space-between;
`;
