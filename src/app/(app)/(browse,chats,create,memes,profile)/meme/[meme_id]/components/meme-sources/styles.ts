import { Image, Music2 } from "lucide-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 0 24px;
  gap: 16px;
`;

export const SourceButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.primary};
    border: 1px solid ${theme.colors.border.primary};
  `}

  flex: 1;
  padding: 4px 12px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const SourceName = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.sm}px;
    color: ${theme.colors.fg.primary};
  `}

  transform: translateY(-1px);
`;

export const MusicSourceIcon = styled(Music2).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.fg.primary,
}))``;

export const MemeBaseSourceIcon = styled(Image).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.fg.primary,
}))``;
