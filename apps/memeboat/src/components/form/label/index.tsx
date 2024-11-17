import type { TextProps } from "react-native";

import { StyledFormLabel } from "./styles";

interface FormLabelProps extends TextProps {}

export function FormLabel(props: FormLabelProps) {
  return <StyledFormLabel {...props} />;
}
