import { Container, ReactionText } from "./styles";

import { UserAvatarStack } from "@/components/user-avatar-stack";

export interface MemeReactionsProps {
  followingUsersReactions: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  reactionsCount: number;
}

function toReadableNumber(number: number) {
  return Intl.NumberFormat("pt-BR", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(number);
}

export function MemeReactions({
  followingUsersReactions,
  reactionsCount,
}: MemeReactionsProps) {
  return (
    <Container>
      {followingUsersReactions.length > 0 ? (
        <>
          <UserAvatarStack
            avatarSources={followingUsersReactions
              .slice(0, 3)
              .map((followingUser) => ({
                uri: followingUser.avatarUrl,
              }))}
          />
          <ReactionText>
            {followingUsersReactions[0].name} e +
            {toReadableNumber(reactionsCount)} pessoas reagiram
          </ReactionText>
        </>
      ) : (
        <ReactionText>
          {toReadableNumber(reactionsCount)} pessoas reagiram
        </ReactionText>
      )}
    </Container>
  );
}
