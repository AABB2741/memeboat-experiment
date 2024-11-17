import styled, { css } from "styled-components/native";

export const Container = styled.View`
  position: relative;
`;

interface StyledUserAvatarProps {
  size: number;
}

export const StyledUserAvatar = styled.Image<StyledUserAvatarProps>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
  `};
`;

export const LevelContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.accent};
    padding: 2px 4px;
  `};

  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50px;
  min-width: 25px;
  align-items: center;
`;

export const Level = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.xs}px;
    color: ${theme.colors.fg.onAccent};
  `}
`;
