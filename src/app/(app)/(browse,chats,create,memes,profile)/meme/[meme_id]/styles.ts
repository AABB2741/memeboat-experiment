import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.primary};
  `};

  flex: 1;
  justify-content: space-between;
`;

export const Group = styled.View`
  gap: 24px;
`;
