import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { Container, ReturnIcon, Title } from "./styles";

interface HeaderProps extends NativeStackHeaderProps {}

export function Header({ options, navigation }: HeaderProps) {
  return (
    <Container>
      {navigation.canGoBack() && <ReturnIcon onPress={navigation.goBack} />}
      <Title>{options.title}</Title>
    </Container>
  );
}
