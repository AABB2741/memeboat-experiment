import type { MemeContentSchema } from "@/schemas/meme-content";
import { memo, useEffect, useState } from "react";
import { Container, MemeImage } from "./styles";

// import memeImage from "@/assets/meme.jpg";
// import memeImage from "@/assets/meme-2.jpg";
import { resize } from "@/utils/resize";
import { Image, Text, useWindowDimensions } from "react-native";

export type MemeContentProps = MemeContentSchema & {
  title: string | null;
};

type Dimension = {
  width: number;
  height: number;
};

export const MemeContent = memo((props: MemeContentProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const [contentDimensions, setContentDimensions] = useState<Dimension | null>(
    null,
  );

  useEffect(() => {
    if (contentDimensions) {
      return;
    }

    if (props.type === "image") {
      Image.getSize(props.imageUrl, (width, height) => {
        setContentDimensions({
          width,
          height,
        });
      });
    }
  }, [contentDimensions]);

  if (props.type === "image") {
    const { newWidth, newHeight } = resize({
      from: {
        width: contentDimensions?.width ?? 1,
        height: contentDimensions?.height ?? 1,
      },
      to: {
        width: windowWidth ?? 1,
      },
    });

    return (
      <Container>
        <MemeImage
          source={{ uri: props.imageUrl }}
          style={{
            width: newWidth,
            height: newHeight,
          }}
        />
        {props.title && <Text style={{ color: "white" }}>{props.title}</Text>}
      </Container>
    );
  }

  return null;
});
