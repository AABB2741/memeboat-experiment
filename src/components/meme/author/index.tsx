import { UserPlus } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

import { Button } from "@/components/button";
import { UserAvatar } from "@/components/user-avatar";

import {
  AuthorInfos,
  AuthorName,
  Container,
  OptionsIcon,
  PublishTime,
} from "./styles";

export function MemeAuthor() {
  return (
    <Container>
      <UserAvatar size={40} accountLevel={12} />

      <AuthorInfos>
        <AuthorName>joaozinho 🅱️</AuthorName>
        <PublishTime>há 2h</PublishTime>
      </AuthorInfos>

      <Button.Container size="small">
        <Button.Icon icon={UserPlus} />

        <Button.Text>Seguir</Button.Text>
      </Button.Container>

      <TouchableOpacity activeOpacity={0.7}>
        <OptionsIcon />
      </TouchableOpacity>
    </Container>
  );
}
