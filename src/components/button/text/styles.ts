import styled, { css } from "styled-components/native";
import type { ButtonSize, ButtonVariant } from "../container";

const buttonTextVariants = {
  size: {
    small: css`
      ${({ theme }) => css`
        font-size: ${theme.font.size.sm}px;
      `};
    `,
    base: css`
      ${({ theme }) => css`
        font-size: ${theme.font.size.base}px;
      `};
    `,
    large: css`
      ${({ theme }) => css`
        font-size: ${theme.font.size.lg}px;
      `};
    `,
  },
  variant: {
    normal: css`
      ${({ theme }) => css`
        font-family: ${theme.font.family.regular};
        color: ${theme.colors.fg.primary};
      `};
    `,
    highlight: css`
      ${({ theme }) => css`
        font-family: ${theme.font.family.bold};

        color: ${theme.colors.fg.onAccent};
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
