import type { TextProps } from "react-native";

import { StyledButtonText } from "./styles";

interface ButtonTextProps extends TextProps {}

export function ButtonText({ ...rest }: ButtonTextProps) {
  return <StyledButtonText {...rest} />;
}
