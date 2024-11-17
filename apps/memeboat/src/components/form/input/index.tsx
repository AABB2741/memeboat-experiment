import type { LucideIcon } from "lucide-react-native";
import React from "react";
import { type TextInputProps, type TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import {
  Container,
  IconContainer,
  Input,
  InputOption,
  InputOptionsContainer,
} from "./styles";

interface InputOption extends Omit<TouchableOpacityProps, "children"> {
  key: string;
  icon: LucideIcon;
}

interface FormInputProps extends TextInputProps {
  icon?: LucideIcon;
  options?: InputOption[];
}

export function FormInput({ icon: Icon, options, ...rest }: FormInputProps) {
  const { colors } = useTheme();

  return (
    <Container>
      {Icon && (
        <IconContainer>
          <Icon color={colors.fg.placeholder} size={16} />
        </IconContainer>
      )}
      <Input {...rest} />
      {!!options?.length && (
        <InputOptionsContainer>
          {options?.map(({ icon: Icon, key, ...rest }) => (
            <InputOption key={key} activeOpacity={0.7} {...rest}>
              <Icon size={16} color={colors.fg.secondary} />
            </InputOption>
          ))}
        </InputOptionsContainer>
      )}
    </Container>
  );
}
