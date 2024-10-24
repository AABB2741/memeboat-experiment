import { Container, MemeImage } from "./styles";

// import memeImage from "@/assets/meme.jpg";
import memeImage from "@/assets/meme-2.jpg";

export function MemeContent() {
  return (
    <Container>
      <MemeImage source={memeImage} />
    </Container>
  );
}
