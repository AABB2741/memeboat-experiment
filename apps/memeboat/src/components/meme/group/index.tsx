import type { ViewProps } from "react-native";

import { StyledMemeGroup } from "./styles";

interface MemeGroupProps extends ViewProps {}

export function MemeGroup(props: MemeGroupProps) {
  return <StyledMemeGroup {...props} />;
}
