import styled, { css } from "styled-components/native";
import type { ButtonSize, ButtonVariant } from "../container";

const buttonTextVariants = {
  size: {
    small: css`
      ${({ theme }) => css`
        font-family: ${theme.font.family.regular};
        font-size: ${theme.font.size.sm}px;
      `};
    `,
    base: css`
      ${({ theme }) => css`
        font-family: ${theme.font.family.regular};
        font-size: ${theme.font.size.base}px;
      `};
    `,
    large: css`
      ${({ theme }) => css`
        font-size: ${theme.font.size.lg}px;
        font-family: ${theme.font.family.bold};
      `};
    `,
  },
  variant: {
    normal: css`
      ${({ theme }) => css`
        color: ${theme.colors.fg.primary};
      `};
    `,
    highlight: css`
      ${({ theme }) => css`
        color: ${theme.colors.fg.onAccent};
      `};
    `,
    active: css`
      ${({ theme }) => css`
        color: ${theme.colors.fg.onActive};
      `};
    `,
  },
};

interface StyledButtonText {
  size: ButtonSize;
  variant: ButtonVariant;
}

export const StyledButtonText = styled.Text<StyledButtonText>`
  ${({ size, variant }) => css`
    ${buttonTextVariants.size[size]};
    ${buttonTextVariants.variant[variant]};
  `};
`;
