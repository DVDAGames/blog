import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { parseISO } from "date-fns";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (typeof data?.date?.toISOString !== "undefined") {
    data.date = data.date.toISOString();
  }

  return { ...data, slug: realSlug, content } as Post;
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
