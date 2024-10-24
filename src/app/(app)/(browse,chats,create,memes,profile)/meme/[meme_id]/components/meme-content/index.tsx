import { Container, MemeImage } from "./styles";

import memeImage from "@/assets/meme.jpg";

export function MemeContent() {
  return (
    <Container>
      <MemeImage source={memeImage} />
    </Container>
  );
}
