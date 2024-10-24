import styled, { css } from "styled-components/native";
import type { ButtonSize, ButtonVariant } from ".";

interface StyledButtonContainerProps {
  variant: ButtonVariant;
  size: ButtonSize;
}

const containerVariants = {
  variant: {
    normal: css`
      ${({ theme }) => css`
        background-color: ${theme.colors.bg.secondary};
        border: 1px solid ${theme.colors.border.primary};
      `};
    `,
    highlight: css`
      ${({ theme }) => css`
        background-color: ${theme.colors.accent};
      `};
    `,
    active: css`
      ${({ theme }) => css`
        background-color: ${theme.colors.bg.active};
      `};
    `,
  },
  size: {
    small: css`
      padding: 4px 8px;
      gap: 6px;
    `,
    base: css`
      padding: 8px 12px;
      gap: 8px;
    `,
    large: css`
      padding: 16px;
      gap: 12px;
    `,
  },
};

export const StyledButtonContainer = styled.TouchableOpacity.attrs<StyledButtonContainerProps>(
  {
    activeOpacity: 0.7,
  },
)`
  ${({ theme, variant, size }) => css`
    ${containerVariants.size[size]}
    ${containerVariants.variant[variant]}

    border-radius: 8px;
  `};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
