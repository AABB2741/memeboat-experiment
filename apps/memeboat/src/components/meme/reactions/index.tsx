import { Container, ReactionText } from "./styles";

import { beautifyNumber } from "@/utils/beautify-number";

import { UserAvatarStack } from "@/components/user-avatar-stack";

export interface MemeReactionsProps {
  followingUsersReactions: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  reactionsCount: number;
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
            {beautifyNumber(reactionsCount)} pessoas reagiram
          </ReactionText>
        </>
      ) : (
        <ReactionText>
          {beautifyNumber(reactionsCount)} pessoas reagiram
        </ReactionText>
      )}
    </Container>
  );
}
