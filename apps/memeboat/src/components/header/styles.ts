import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.secondary};
    border-color: ${theme.colors.border.primary};
  `};

  padding: 24px;
  border-bottom-width: 1px;

  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.colors.fg.primary,
  size: 24,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.lg}px;
    color: ${theme.colors.fg.primary};
  `}

  transform: translateY(-2px);
`;
