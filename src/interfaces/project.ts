import type { CTA } from "./cta";

export type Project = {
  slug: string;
  title: string;
  url: string;
  date: string;
  price: string;
  coverImage: string;
  bannerImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  ctas: CTA[];
  content: string;
  featured?: boolean;
  archived?: boolean;
};
