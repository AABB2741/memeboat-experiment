import styled, { css } from "styled-components/native";

export const StyledSocialLoginButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.secondary};
    border: 1px solid ${theme.colors.border.primary};
  `}

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  border-radius: 24px;
  padding: 8px 12px;
`;

export const SocialLoginCompanyLogo = styled.Image`
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;

export const SocialLoginCompanyName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.sm}px;
    color: ${theme.colors.fg.primary};
  `}

  transform: translateY(-1px);
`;
