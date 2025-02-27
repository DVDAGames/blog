import { unified } from "unified";
import html from "remark-html";
import gfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { common } from "lowlight";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkVideo from "remark-video";
import remarkYoutube from "remark-youtube";

import gdscript from "./gdscript.highlight";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkDirective)
    .use(remarkYoutube)
    .use(remarkVideo, {
      publicDir: "./assets",
    })
    .use(gfm)
    .use(html, { sanitize: false })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeHighlight, { languages: { ...common, gdscript } })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
