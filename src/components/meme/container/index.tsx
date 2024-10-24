import type { ViewProps } from "react-native";
import { StyledMemeContainer } from "./styles";

interface MemeContainerProps extends ViewProps {}

export function MemeContainer(props: MemeContainerProps) {
  return <StyledMemeContainer {...props} />;
}
