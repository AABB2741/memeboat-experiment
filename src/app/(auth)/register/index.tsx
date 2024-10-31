import { Link } from "expo-router";
import { AtSign, Eye, EyeOff, Mail } from "lucide-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { SocialLoginButton } from "@/components/social-login-button";

import {
  Description,
  Header,
  SwitchFormText,
  Title,
} from "@/features/auth/styles/register";

import googleLogo from "@/assets/google-logo.jpg";

export default function LoginPage() {
  const [arePasswordsVisible, setArePasswordsVisible] = useState(false);

  return (
    <>
      <Header>
        <Title>Cadastrar-se</Title>
        <Description>Crie a sua conta gratuitamente.</Description>
      </Header>

      <Form.Field>
        <Form.Label>Seu nome de usuário</Form.Label>
        <Form.Input placeholder="joaozinho" icon={AtSign} />
      </Form.Field>

      <Form.Field>
        <Form.Label>Seu endereço de e-mail</Form.Label>
        <Form.Input placeholder="joao@zinho.com" icon={Mail} />
      </Form.Field>

      <Form.Field>
        <Form.Label>Sua senha</Form.Label>
        <Form.Input
          placeholder="1234"
          secureTextEntry={!arePasswordsVisible}
          options={[
            {
              icon: arePasswordsVisible ? EyeOff : Eye,
              key: "toggle-visibility",
              onPress: () => setArePasswordsVisible((prevState) => !prevState),
            },
          ]}
        />
      </Form.Field>

      <Form.Field>
        <Form.Label>Confirme sua senha</Form.Label>
        <Form.Input
          placeholder="1234"
          secureTextEntry={!arePasswordsVisible}
          options={[
            {
              icon: arePasswordsVisible ? EyeOff : Eye,
              key: "toggle-visibility",
              onPress: () => setArePasswordsVisible((prevState) => !prevState),
            },
          ]}
        />
      </Form.Field>

      <Button.Container variant="highlight" size="large">
        <Button.Text>Criar sua conta</Button.Text>
      </Button.Container>

      <Link href="/login" asChild replace>
        <TouchableOpacity activeOpacity={0.7}>
          <SwitchFormText>Já tenho uma conta</SwitchFormText>
        </TouchableOpacity>
      </Link>

      <Form.Separator text="Ou, se preferir" />

      <SocialLoginButton
        logoSource={googleLogo}
        name="Cadastre-se com o Google"
      />
    </>
  );
}
