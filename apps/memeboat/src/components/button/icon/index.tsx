import type { LucideIcon, LucideProps } from "lucide-react-native";
import { useContext } from "react";
import { useTheme } from "styled-components/native";
import {
  ButtonContext,
  type ButtonSize,
  type ButtonVariant,
} from "../container";

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
  const { size, variant } = useContext(ButtonContext);

  const iconColor: Record<ButtonVariant, string> = {
    normal: colors.fg.primary,
    highlight: colors.fg.onAccent,
    active: colors.fg.onActive,
  };

  return <Icon color={iconColor[variant]} size={iconSize[size]} {...rest} />;
}
