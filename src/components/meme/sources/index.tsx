import {
  Container,
  MemeBaseSourceIcon,
  MusicSourceIcon,
  SourceButton,
  SourceName,
} from "./styles";

export function MemeSources() {
  return (
    <Container>
      <SourceButton>
        <MusicSourceIcon />
        <SourceName>Bohemian Rhapsody - Queen</SourceName>
      </SourceButton>

      <SourceButton>
        <MemeBaseSourceIcon />
        <SourceName>Cara muito loko com a cabeça na mão lkkkkkk</SourceName>
      </SourceButton>
    </Container>
  );
}
