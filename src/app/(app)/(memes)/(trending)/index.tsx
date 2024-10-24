import { type ICarouselInstance } from "react-native-reanimated-carousel";

import { Meme } from "@/components/meme";
import React, { useRef } from "react";
import { FlatList, useWindowDimensions } from "react-native";

export default function TrendingMemesPage() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const { width } = useWindowDimensions();

  return (
    <FlatList
      data={["1", "2", "3", "4"]}
      keyExtractor={(item) => item}
      renderItem={() => <Meme.Page style={{ width }} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
  );
}
