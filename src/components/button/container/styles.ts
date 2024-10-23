import styled, { css } from "styled-components/native";
import type { ButtonSize, ButtonVariant } from ".";

interface StyledButtonContainerProps {
  variant: ButtonVariant;
  size: ButtonSize;
}

export const StyledButtonContainer = styled.TouchableOpacity.attrs<StyledButtonContainerProps>(
  {
    activeOpacity: 0.7,
  },
)`
  ${({ theme, variant, size }) => css`
    background-color: ${variant === "normal"
      ? theme.colors.bg.secondary
      : theme.colors.accent};
    padding: ${size === "large" ? "16px" : ""};
    border-radius: 8px;
  `};

  align-items: center;
  justify-content: center;
`;
