import { Slot } from "expo-router";
import React from "react";

import { FormContainer, LayoutContainer } from "@/features/auth/styles/layout";

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
