import type { ImageProps } from "react-native";

import { Container, Level, LevelContainer, StyledUserAvatar } from "./styles";

import defaultAvatarImage from "@/assets/avatar.jpg";

export interface UserAvatarProps extends ImageProps {
  size?: number;
  accountLevel?: number;
}

export function UserAvatar({
  size = 50,
  accountLevel,
  ...rest
}: UserAvatarProps) {
  return (
    <Container>
      <StyledUserAvatar source={defaultAvatarImage} size={size} {...rest} />

      {accountLevel && (
        <LevelContainer>
          <Level>{accountLevel}</Level>
        </LevelContainer>
      )}
    </Container>
  );
}
