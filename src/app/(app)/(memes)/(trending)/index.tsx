import React, { useEffect, useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";

import {
  fetchTrendingMemes,
  type TrendingMeme,
} from "@/api/fetch-trending-memes";
import { Meme } from "@/components/meme";
import { Container } from "./styles";

type FeedItem = TrendingMeme;

export default function TrendingMemesPage() {
  const { width } = useWindowDimensions();

  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
  const [feed, setFeed] = useState<FeedItem[]>([]);
  console.log(
    "feed",
    feed.length,
    feed.map((f) => f.id.slice(0, 3)).join(", "),
  );

  async function loadMoreMemes() {
    const { trendingMemes } = await fetchTrendingMemes({
      limit: 5,
    });

    setFeed((prevState) => [...prevState, ...trendingMemes]);
  }

  useEffect(() => {
    loadMoreMemes();
  }, []);

  console.log("renderizando feed no index", currentFeedIndex);

  return (
    <Container>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Meme.Page
            sources={{
              music: item.music,
              baseMeme: item.baseMeme,
            }}
            author={item.author}
            content={{
              ...item.content,
              title: item.id,
            }}
            reactions={{
              followingUsersReactions: item.followingUsersReactions,
              reactionsCount: item.likesCount + item.dislikesCount,
            }}
            interactions={{
              likesCount: item.likesCount,
              dislikesCount: item.dislikesCount,
              commentsCount: item.commentsCount,
            }}
            style={{ width }}
          />
        )}
        initialScrollIndex={currentFeedIndex}
        onMomentumScrollEnd={(e) => {
          const index = Math.floor(
            e.nativeEvent.contentOffset.x /
              e.nativeEvent.layoutMeasurement.width,
          );
          setCurrentFeedIndex(index);
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log("fim chegado");
          loadMoreMemes();
        }}
      />
    </Container>
  );
}
