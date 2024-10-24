import type { ImageSourcePropType } from "react-native";
import { AvatarImage, Container } from "./styles";

interface UserAvatarStackProps {
  avatarSources: ImageSourcePropType[];
  avatarSize?: number;
}

export function UserAvatarStack({
  avatarSources,
  avatarSize = 20,
}: UserAvatarStackProps) {
  return (
    <Container>
      {avatarSources.map((avatarSource, index) => (
        <AvatarImage
          source={avatarSource}
          index={index}
          size={avatarSize}
          key={index}
        />
      ))}
    </Container>
  );
}
