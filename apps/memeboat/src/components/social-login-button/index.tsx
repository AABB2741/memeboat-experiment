import type { ImageSourcePropType, TouchableOpacityProps } from "react-native";

import {
  SocialLoginCompanyLogo,
  SocialLoginCompanyName,
  StyledSocialLoginButton,
} from "./styles";

interface SocialLoginButtonProps extends TouchableOpacityProps {
  logoSource: ImageSourcePropType;
  name: string;
}

export function SocialLoginButton({
  logoSource,
  name,
  ...rest
}: SocialLoginButtonProps) {
  return (
    <StyledSocialLoginButton {...rest}>
      <SocialLoginCompanyLogo source={logoSource} />
      <SocialLoginCompanyName>{name}</SocialLoginCompanyName>
    </StyledSocialLoginButton>
  );
}
