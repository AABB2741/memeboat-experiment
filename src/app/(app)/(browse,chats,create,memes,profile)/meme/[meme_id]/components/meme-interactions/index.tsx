import {
  CommentsIcon,
  Container,
  DislikeIcon,
  InteractionButton,
  InteractionText,
  LikeIcon,
  ReactionContainer,
} from "./styles";

export function MemeInteractions() {
  return (
    <Container>
      <ReactionContainer>
        <InteractionButton>
          <LikeIcon />
          <InteractionText>5,1 mil</InteractionText>
        </InteractionButton>
        <InteractionButton>
          <DislikeIcon />
          <InteractionText>414 mil</InteractionText>
        </InteractionButton>
      </ReactionContainer>

      <InteractionButton>
        <CommentsIcon />
        <InteractionText>237</InteractionText>
      </InteractionButton>
    </Container>
  );
}
