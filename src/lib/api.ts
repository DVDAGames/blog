import { Post } from "@/interfaces/post";
import { Game } from "@/interfaces/game";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const gamesDirectory = join(process.cwd(), "_games");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getGameSlugs() {
  return fs.readdirSync(gamesDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (typeof data?.date?.toISOString !== "undefined") {
    data.date = data.date.toISOString();
  }

  return { ...data, slug: realSlug, content } as Post;
}

export function getGameBySlug(slug: string): Game {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(gamesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Game;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  const featuredPosts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.featured)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => !post.featured)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return [...featuredPosts, ...posts];
}

export function getAllGames(): Game[] {
  const slugs = getGameSlugs();

  const featuredGames = slugs
    .map((slug) => getGameBySlug(slug))
    .filter((game) => game.featured)
    .sort((game1, game2) => (game1.releaseDate > game2.releaseDate ? -1 : 1));

  const games = slugs
    .map((slug) => getGameBySlug(slug))
    .filter((game) => !game.featured)
    // sort games by date in descending order
    .sort((game1, game2) => (game1.releaseDate > game2.releaseDate ? -1 : 1));

  return [...featuredGames, ...games];
}
