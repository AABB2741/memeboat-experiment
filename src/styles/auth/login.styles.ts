import styled, { css } from "styled-components/native";

export const Header = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.xl}px;
    color: ${theme.colors.fg.primary};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.base}px;
    color: ${theme.colors.fg.primary};
    line-height: ${theme.font.size.base * 1.5}px;
  `};
`;

export const ForgotPasswordText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.sm}px;
    color: ${theme.colors.fg.primary};
  `};

  text-align: left;
  width: 100%;
`;

export const SwitchFormText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.base}px;
    color: ${theme.colors.fg.primary};
  `};

  text-align: center;
  width: 100%;
`;
