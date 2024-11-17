import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 0 24px;
`;

export const ReactionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.sm}px;
    color: ${theme.colors.fg.secondary};
  `}

  transform: translateY(-1px);
`;
