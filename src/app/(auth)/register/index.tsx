import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { AtSign, Mail } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { Description, Header, SwitchFormText, Title } from "./styles";

import googleLogo from "@/assets/google-logo.jpg";
import { SocialLoginButton } from "@/components/social-login-button";
import { Link } from "expo-router";

export default function LoginPage() {
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
        <Form.Input placeholder="1234" secureTextEntry />
      </Form.Field>

      <Form.Field>
        <Form.Label>Confirme sua senha</Form.Label>
        <Form.Input placeholder="1234" secureTextEntry />
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
