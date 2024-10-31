import { Link, router } from "expo-router";
import { AtSign, Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import googleLogo from "@/assets/google-logo.jpg";
import { Button } from "@/components/button";
import { Form } from "@/components/form";

import { SocialLoginButton } from "@/components/social-login-button";

import {
  Description,
  ForgotPasswordText,
  Header,
  SwitchFormText,
  Title,
} from "@/features/auth/styles/login";

export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleLogin() {
    router.replace("/(app)/(memes)");
  }

  return (
    <>
      <Header>
        <Title>Fazer login</Title>
        <Description>
          Faça login na sua conta para embarcar nesse mar de incríveis memes!
        </Description>
      </Header>

      <Form.Field>
        <Form.Label>Seu nome de usuário</Form.Label>
        <Form.Input placeholder="joaozinho" icon={AtSign} />
      </Form.Field>

      <Form.Field>
        <Form.Label>Sua senha</Form.Label>
        <Form.Input
          placeholder="1234"
          secureTextEntry={!isPasswordVisible}
          options={[
            {
              icon: isPasswordVisible ? EyeOff : Eye,
              key: "toggle-visibility",
              onPress: () => setIsPasswordVisible((prevState) => !prevState),
            },
          ]}
        />
      </Form.Field>

      <Link href="/forgot-password" replace asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </TouchableOpacity>
      </Link>

      <Button.Container variant="highlight" size="large" onPress={handleLogin}>
        <Button.Text>Fazer login</Button.Text>
      </Button.Container>

      <Link href="/register" replace asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <SwitchFormText>Ainda não tem uma conta?</SwitchFormText>
        </TouchableOpacity>
      </Link>

      <Form.Separator text="Ou, se preferir" />

      <SocialLoginButton
        logoSource={googleLogo}
        name="Fazer login com o Google"
      />
    </>
  );
}
