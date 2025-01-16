import { unified } from "unified";
import html from "remark-html";
import gfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { common } from "lowlight";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkYoutube from "remark-youtube";

import gdscript from "./gdscript.highlight";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkYoutube)
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
