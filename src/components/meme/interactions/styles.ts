import { Angry, Laugh, MessageCircle } from "lucide-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  padding-top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ReactionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const InteractionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const InteractionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.base}px;
    color: ${theme.colors.fg.primary};
  `}
`;

export const LikeIcon = styled(Laugh).attrs(({ theme }) => ({
  color: theme.colors.fg.primary,
}))``;

export const DislikeIcon = styled(Angry).attrs(({ theme }) => ({
  color: theme.colors.fg.primary,
}))``;

export const CommentsIcon = styled(MessageCircle).attrs(({ theme }) => ({
  color: theme.colors.fg.primary,
}))``;
