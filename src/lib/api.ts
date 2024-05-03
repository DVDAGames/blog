import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import type { Post } from "@/interfaces/post";
import type { Game } from "@/interfaces/game";
import type { Project } from "@/interfaces/project";
import type { ContentType, Content } from "@/interfaces/content";

const postsDirectory = join(process.cwd(), "_posts");
const gamesDirectory = join(process.cwd(), "_games");
const projectsDirectory = join(process.cwd(), "_projects");

export function getContentDirectory(contentType: ContentType = "post"): string {
  if (contentType === "game") {
    return gamesDirectory;
  } else if (contentType === "project") {
    return projectsDirectory;
  }

  return postsDirectory;
}

export function getContentSlugs(contentType: ContentType = "post"): string[] {
  let directory = getContentDirectory(contentType);

  return fs.readdirSync(directory);
}

export function getContentBySlug<T>(slug: string, contentType: ContentType = "post"): T {
  const realSlug = slug.replace(/\.md$/, "");
  const directory = getContentDirectory(contentType);
  const fullPath = join(directory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as T;
}

export function getAllContent<T>(contentType: ContentType = "post", includeArchive = false): T[] {
  const slugs = getContentSlugs(contentType);

  const allContent: Content[] = slugs.map((slug) => getContentBySlug(slug, contentType));

  const featuredContent = allContent
    .filter((item) => item.featured && !item.archived)
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));

  let content = allContent.filter((item) => !item.featured && !item.archived);

  let archive: Content[] = [];

  if (includeArchive) {
    archive = allContent.filter((item) => typeof item?.archived !== "undefined" && item?.archived);
  }

  // sort posts by date in descending order
  content.sort((item1, item2) => (item1.date > item2.date ? -1 : 1));

  return [...(featuredContent as T[]), ...(content as T[]), ...(archive as T[])];
}

export function getAllPosts(includeArchive = false): Post[] {
  return getAllContent<Post>("post", includeArchive) as Post[];
}

export function getPostBySlug(slug: string): Post {
  return getContentBySlug<Post>(slug, "post");
}

export function getAllGames(includeArchive = false): Game[] {
  return getAllContent<Game>("game", includeArchive) as Game[];
}

export function getGameBySlug(slug: string): Game {
  return getContentBySlug<Game>(slug, "game");
}

export function getAllProjects(includeArchive = false): Project[] {
  return getAllContent<Project>("project", includeArchive) as Project[];
}

export function getProjectBySlug(slug: string): Project {
  return getContentBySlug<Project>(slug, "project");
}
