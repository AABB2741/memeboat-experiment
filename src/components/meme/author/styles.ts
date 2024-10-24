import { Ellipsis } from "lucide-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 24px;
  padding-bottom: 0;
`;

export const AuthorInfos = styled.View`
  flex: 1;
`;

export const AuthorName = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.base}px;
    color: ${theme.colors.fg.primary};
  `};
`;

export const PublishTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.sm}px;
    color: ${theme.colors.fg.secondary};
  `};
`;

export const OptionsIcon = styled(Ellipsis).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.fg.primary,
}))``;
