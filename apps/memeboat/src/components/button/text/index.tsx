import type { TextProps } from "react-native";

import { useContext } from "react";
import { ButtonContext } from "../container";
import { StyledButtonText } from "./styles";

interface ButtonTextProps extends TextProps {}

export function ButtonText({ ...rest }: ButtonTextProps) {
  const { size, variant } = useContext(ButtonContext);

  return <StyledButtonText size={size} variant={variant} {...rest} />;
}
