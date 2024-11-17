import {
  Container,
  MemeBaseSourceIcon,
  MusicSourceIcon,
  SourceButton,
  SourceName,
} from "./styles";

export interface MemeSourcesProps {
  music: {
    id: string;
    name: string;
    artist: string;
  } | null;
  baseMeme: {
    id: string;
    title: string | null;
  } | null;
}

export function MemeSources({ music, baseMeme }: MemeSourcesProps) {
  return (
    <Container>
      {music && (
        <SourceButton>
          <MusicSourceIcon />
          <SourceName>
            {music.name} - {music.artist}
          </SourceName>
        </SourceButton>
      )}

      {baseMeme && (
        <SourceButton>
          <MemeBaseSourceIcon />
          <SourceName>{baseMeme.title ?? baseMeme.id}</SourceName>
        </SourceButton>
      )}
    </Container>
  );
}
