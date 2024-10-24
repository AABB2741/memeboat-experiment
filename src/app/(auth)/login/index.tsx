import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { AtSign } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import {
  Description,
  ForgotPasswordText,
  Header,
  SwitchFormText,
  Title,
} from "./styles";

import googleLogo from "@/assets/google-logo.jpg";
import { Link, router } from "expo-router";
import { SocialLoginButton } from "../../../components/social-login-button";

export default function LoginPage() {
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
        <Form.Input placeholder="1234" secureTextEntry />
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
