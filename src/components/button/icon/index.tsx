import type { LucideIcon, LucideProps } from "lucide-react-native";
import { useContext } from "react";
import { useTheme } from "styled-components/native";
import { ButtonContext, type ButtonSize } from "../container";

interface ButtonIconProps extends LucideProps {
  icon: LucideIcon;
}

const iconSize: Record<ButtonSize, number> = {
  small: 16,
  base: 20,
  large: 24,
};

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  const { colors } = useTheme();
  const { size } = useContext(ButtonContext);

  return <Icon color={colors.fg.primary} size={iconSize[size]} {...rest} />;
}
