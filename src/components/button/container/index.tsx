import { createContext } from "react";
import type { TouchableOpacityProps } from "react-native";

import { StyledButtonContainer } from "./styles";

export type ButtonVariant = "normal" | "highlight" | "active";

export type ButtonSize = "small" | "base" | "large";

export interface ButtonContainerProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonContextValue {
  variant: ButtonVariant;
  size: ButtonSize;
}

export const ButtonContext = createContext({} as ButtonContextValue);

export function ButtonContainer({
  variant = "normal",
  size = "base",
  ...rest
}: ButtonContainerProps) {
  return (
    <ButtonContext.Provider value={{ variant, size }}>
      <StyledButtonContainer variant={variant} size={size} {...rest} />
    </ButtonContext.Provider>
  );
}
