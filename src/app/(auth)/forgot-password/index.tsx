import { Mail } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

import { Button } from "@/components/button";
import { Form } from "@/components/form";

import {
  Description,
  Header,
  SwitchFormText,
  Title,
} from "@/features/auth/styles/styles";

import { Link } from "expo-router";

export default function LoginPage() {
  return (
    <>
      <Header>
        <Title>Esqueci minha senha</Title>
        <Description>
          Esqueceu a sua senha? Tudo bem, isso acontece. Relaxe e coloque o seu
          endereço de e-mail no campo abaixo para recuperarmos a sua conta.
        </Description>
      </Header>

      <Form.Field>
        <Form.Label>Seu endereço de e-mail</Form.Label>
        <Form.Input placeholder="joao@zinoh.com" icon={Mail} />
      </Form.Field>

      <Button.Container variant="highlight" size="large">
        <Button.Text>Recuperar conta</Button.Text>
      </Button.Container>

      <Link href="/login" asChild replace>
        <TouchableOpacity activeOpacity={0.7}>
          <SwitchFormText>Voltar para o login</SwitchFormText>
        </TouchableOpacity>
      </Link>
    </>
  );
}
