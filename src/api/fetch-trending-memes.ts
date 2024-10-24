import type { MemeContentSchema } from "@/schemas/meme-content";
import { reactionSchema } from "@/schemas/reaction";
import type { UserSchema } from "@/schemas/user";
import { userBadgeSchema } from "@/schemas/user-badge";
import { faker } from "@faker-js/faker";

export interface TrendingMeme {
  id: string;
  title: string | null;
  likesCount: number;
  dislikesCount: number;
  commentsCount: number;
  reaction: "like" | "dislike" | null;
  content: MemeContentSchema;
  author: UserSchema & {
    isFollowing: boolean;
  };
  followingUsersReactions: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  baseMeme: {
    id: string;
    title: string | null;
  } | null;
  music: {
    id: string;
    name: string;
    artist: string;
  } | null;
}

interface FetchTrendingMemesRequest {
  limit?: number;
}

interface FetchTrendingMemesResponse {
  trendingMemes: TrendingMeme[];
}

export async function fetchTrendingMemes({
  limit = 10,
}: FetchTrendingMemesRequest): Promise<FetchTrendingMemesResponse> {
  const trendingMemes: TrendingMeme[] = Array.from({ length: limit }).map(
    () => ({
      id: faker.string.uuid(),
      title: faker.datatype.boolean() ? faker.lorem.sentences() : null,
      likesCount: faker.number.int(10_000_000),
      dislikesCount: faker.number.int(10_000_000),
      commentsCount: faker.number.int(10_000_000),
      reaction: faker.datatype.boolean()
        ? faker.helpers.arrayElement(reactionSchema.options)
        : null,
      content: {
        type: "image",
        imageUrl: faker.image.url(),
      },
      author: {
        id: faker.string.uuid(),
        avatarUrl: faker.image.avatar(),
        name: faker.person.firstName(),
        badges: faker.helpers.arrayElements(userBadgeSchema.options),
        accountLevel: faker.number.int({
          min: 1,
          max: 1000,
        }),
        isFollowing: faker.datatype.boolean(),
      },
      followingUsersReactions: Array.from({ length: faker.number.int(3) }).map(
        () => ({
          id: faker.string.uuid(),
          name: faker.person.firstName(),
          avatarUrl: faker.image.avatar(),
        }),
      ),
      music: faker.datatype.boolean()
        ? {
            id: faker.string.uuid(),
            name: faker.music.songName(),
            artist: faker.music.artist(),
          }
        : null,
      baseMeme: faker.datatype.boolean()
        ? {
            id: faker.string.uuid(),
            title: faker.datatype.boolean() ? faker.lorem.sentences() : null,
          }
        : null,
    }),
  );

  return { trendingMemes };
}
