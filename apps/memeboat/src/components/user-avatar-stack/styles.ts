import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

interface AvatarImageProps {
  index: number;
  size: number;
}

export const AvatarImage = styled.Image<AvatarImageProps>`
  ${({ theme, index, size }) => css`
    margin-left: ${index !== 0 && `-${size / 2}px`};
    border: 2px solid ${theme.colors.bg.primary};

    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
  `};
`;
