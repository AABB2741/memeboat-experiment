import type { ViewProps } from "react-native";

import { StyledFormField } from "./styles";

interface FormFieldProps extends ViewProps {}

export function FormField(props: FormFieldProps) {
  return <StyledFormField {...props} />;
}
