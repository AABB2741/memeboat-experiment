import { beautifyNumber } from "@/utils/beautify-number";
import {
  CommentsIcon,
  Container,
  DislikeIcon,
  InteractionButton,
  InteractionText,
  LikeIcon,
  ReactionContainer,
} from "./styles";

export interface MemeInteractionsProps {
  likesCount: number;
  dislikesCount: number;
  commentsCount: number;
}

export function MemeInteractions({
  likesCount,
  dislikesCount,
  commentsCount,
}: MemeInteractionsProps) {
  return (
    <Container>
      <ReactionContainer>
        <InteractionButton>
          <LikeIcon />
          <InteractionText>{beautifyNumber(likesCount)}</InteractionText>
        </InteractionButton>
        <InteractionButton>
          <DislikeIcon />
          <InteractionText>{beautifyNumber(dislikesCount)}</InteractionText>
        </InteractionButton>
      </ReactionContainer>

      <InteractionButton>
        <CommentsIcon />
        <InteractionText>{beautifyNumber(commentsCount)}</InteractionText>
      </InteractionButton>
    </Container>
  );
}
