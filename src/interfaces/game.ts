export type CTA = {
  label: string;
  url: string;
};

export type Game = {
  slug: string;
  title: string;
  releaseDate: string;
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
};
