import { Slot } from "expo-router";
import React from "react";

import { FormContainer, LayoutContainer } from "@/styles/auth/styles";

import authBackground from "@/assets/auth-background.jpg";

export default function AuthLayout() {
  return (
    <LayoutContainer source={authBackground}>
      <FormContainer>
        <Slot />
      </FormContainer>
    </LayoutContainer>
  );
}
