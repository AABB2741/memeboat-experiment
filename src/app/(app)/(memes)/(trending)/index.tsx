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
            content={item.content}
            reactions={{
              followingUsersReactions: item.followingUsersReactions,
              reactionsCount: item.likesCount + item.dislikesCount,
            }}
            style={{ width }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onEndReachedThreshold={1}
        onEndReached={() => {
          console.log("fim chegado");
          loadMoreMemes();
        }}
      />
    </Container>
  );
}
