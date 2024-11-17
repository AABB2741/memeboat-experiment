import { faker } from "@faker-js/faker";
import { type PostSchema, type UserSchema } from "@memeboat/schemas";

type Post = {
  post: PostSchema;
  currentUserReaction: "like" | "dislike" | null;
  author: UserSchema;
  followingUsersReactions: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  baseMeme: {
    id: string;
    title: string | null
  } | null;
  music: {
    id: string;
    name: string;
    artist: string
  } | null;
}

interface FetchTrendingPostsRequest {
  limit?: number;
}

interface FetchTrendingPostsResponse {
  posts: Post[];
}

const AVAILABLE_BADGES = ["🅱️🎖️🥇🥈🥉💻🎨"]

export async function fetchTrendingPosts({ limit = 10 }: FetchTrendingPostsRequest = {}): Promise<FetchTrendingPostsResponse> {
  

  const posts = Array.from({ length: limit }).map(() => {
   const baseMeme = faker.datatype.boolean() ? {
    id: faker.string.uuid(),
    title: faker.lorem.sentences(),
   } : null;
   const music = faker.datatype.boolean() ? {
    id: faker.string.uuid(),
    name: faker.music.songName(),
    artist: faker.music.artist(),
   } : null;

   const currentUserReaction = faker.helpers.arrayElement(["like", "dislike", null]);

   const type = faker.helpers.arrayElement(["image", "video"]);
   const contentUrl = type === "image" ? faker.image.url() : "https://rpbcompany.com.br/static/1.mp4"

    return {
      author: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        accountLevel: faker.number.int({ min: 1, max: 1000 }),
        avatarUrl: faker.image.avatar(),
        badges: faker.helpers.arrayElements(AVAILABLE_BADGES, { min: 1, max: 2 }),
      },
      post: {
        id: faker.string.uuid(),
        title: faker.datatype.boolean() ? faker.lorem.sentences() : null,
        likesCount: faker.number.int(10_000_000),
        dislikesCount: faker.number.int(10_000_000),
        commentsCount: faker.number.int(10_000_000),
        type,
        contentUrl
      },
      baseMeme,
      currentUserReaction,
      followingUsersReactions: Array.from({ length: faker.number.int(3) }).map(
        () => ({
          id: faker.string.uuid(),
          name: faker.person.firstName(),
          avatarUrl: faker.image.avatar(),
        }),
      ),
      music,
    } satisfies Post;
  })

  return { posts };
}
