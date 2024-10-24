import { UserCheck, UserPlus } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

import { Button } from "@/components/button";
import { UserAvatar } from "@/components/user-avatar";

import type { UserBadgeSchema } from "@/schemas/user-badge";
import {
  AuthorInfos,
  AuthorName,
  Container,
  OptionsIcon,
  PublishTime,
} from "./styles";

export interface MemeAuthorProps {
  id: string;
  avatarUrl: string;
  name: string;
  badges: UserBadgeSchema[];
  accountLevel: number;
  isFollowing: boolean;
}

export function MemeAuthor({
  id,
  avatarUrl,
  name,
  badges,
  accountLevel,
  isFollowing,
}: MemeAuthorProps) {
  return (
    <Container>
      <UserAvatar
        size={40}
        source={{ uri: avatarUrl }}
        accountLevel={accountLevel}
      />

      <AuthorInfos>
        <AuthorName>
          {name} {badges.join("")}
        </AuthorName>
        <PublishTime>há 2h</PublishTime>
      </AuthorInfos>

      {!isFollowing && (
        <Button.Container size="small">
          <Button.Icon icon={UserPlus} />

          <Button.Text>Seguir</Button.Text>
        </Button.Container>
      )}
      {isFollowing && (
        <Button.Container size="small" variant="active">
          <Button.Icon icon={UserCheck} />

          <Button.Text>Seguindo</Button.Text>
        </Button.Container>
      )}

      <TouchableOpacity activeOpacity={0.7}>
        <OptionsIcon />
      </TouchableOpacity>
    </Container>
  );
}
