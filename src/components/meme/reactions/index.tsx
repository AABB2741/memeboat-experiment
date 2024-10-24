import { Container, ReactionText } from "./styles";

import { UserAvatarStack } from "@/components/user-avatar-stack";

import avatarImage2 from "@/assets/avatar-2.jpg";
import avatarImage3 from "@/assets/avatar-3.jpg";
import avatarImage from "@/assets/avatar.jpg";

export function MemeReactions() {
  return (
    <Container>
      <UserAvatarStack
        avatarSources={[avatarImage, avatarImage2, avatarImage3]}
      />

      <ReactionText>joao e +5 mil pessoas reagiram</ReactionText>
    </Container>
  );
}
