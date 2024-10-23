import type { LucideIcon } from "lucide-react-native";
import React from "react";
import { type TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, IconContainer, Input } from "./styles";

interface FormInputProps extends TextInputProps {
  icon?: LucideIcon;
}

export function FormInput({ icon: Icon, ...rest }: FormInputProps) {
  const { colors } = useTheme();

  return (
    <Container>
      {Icon && (
        <IconContainer>
          <Icon color={colors.fg.placeholder} size={16} />
        </IconContainer>
      )}
      <Input {...rest} />
    </Container>
  );
}
