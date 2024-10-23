import { router } from "expo-router";
import { Button } from "react-native";
import { Container } from "../styles";

export default function MemesPage() {
  return (
    <Container>
      <Button
        title="Acessar usuario 1"
        onPress={() => router.push("/(app)/(memes)/user/1")}
      />
      <Button
        title="Acessar meme 123"
        onPress={() => router.push("/(app)/(memes)/meme/123")}
      />
    </Container>
  );
}
