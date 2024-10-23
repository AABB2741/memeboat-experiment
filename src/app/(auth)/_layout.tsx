import { Slot } from "expo-router";

import { FormContainer, LayoutContainer } from "./styles";

import authBackground from "@/assets/auth-background.jpg";
import React from "react";

export default function AuthLayout() {
  return (
    <LayoutContainer source={authBackground}>
      <FormContainer>
        <Slot />
      </FormContainer>
    </LayoutContainer>
  );
}
