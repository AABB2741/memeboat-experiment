import React from "react";
import { Container, Separator, Text } from "./styles";

interface FormLabelPropsProps {
  text?: string;
}

export function FormSeparator({ text }: FormLabelPropsProps) {
  return (
    <Container>
      <Separator />
      {text && (
        <>
          <Text>{text}</Text>
          <Separator />
        </>
      )}
    </Container>
  );
}
