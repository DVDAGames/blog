import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeRemark from "rehype-remark";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeRemark)
    .process(markdown);
  return result.toString();
}
