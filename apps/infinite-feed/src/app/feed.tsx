import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import { fetchTrendingPosts } from "@memeboat/fake-api";
import { getRandomCustomPost, PostsFeed } from "@memeboat/features";
import type { SeededPost } from "@memeboat/schemas";

import { Loading } from "@/components/loading";

import { styles } from "./styles";

export function Feed() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<SeededPost[] | null>(null);

  const loadMorePosts = useCallback(async () => {
    const { posts: newPosts } = await fetchTrendingPosts();
    const customPost = await getRandomCustomPost();

    setPosts((prevState) => {
      const res = prevState ? [...prevState] : [];

      res.push(...newPosts);

      if (customPost) {
        res.push(customPost);
      }

      return res;
    });
  }, []);

  useEffect(() => {
    loadMorePosts();
  }, []);

  if (!posts) {
    return (
      <Loading
        message="Carregando o feed..."
        tooLongLoading={{
          10000: "Isso está demorando um pouco mais do que o esperado...",
          20000: "Ainda estamos aqui. Aguenta mais um pouquinho...",
          30000: "Parece que tivemos um problema, que tal reiniciar o app?",
        }}
      />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <PostsFeed
          onRequestMorePosts={loadMorePosts}
          isNextPageAvailable={!isLoading}
          posts={posts}
        />
        {/* <SwiperFlatList
          index={feedIndex}
          onChangeIndex={({ index }) => setFeedIndex(index)}
          data={items}
          renderItem={({ item, index }: ListRenderItemInfo<Post>) => {
            return (
              <View
                style={[styles.contentContainer, { width: windowWidth }]}
                key={item.id}
              >
                {item.type === "image" && <PostRenderer.Image {...item} />}
                {item.type === "video" && (
                  <PostRenderer.Video
                    {...item}
                    isVisible={index === feedIndex}
                  />
                )}
                {item.type === "custom" && item.render()}
              </View>
            );
          }}
        /> */}
      </View>
    </>
  );
}
