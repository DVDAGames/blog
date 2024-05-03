import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGames, getGameBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
import { GameHeader } from "../../_components/game-header";

export default async function Post({ params }: Params) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    return notFound();
  }

  const content = await markdownToHtml(game.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <GameHeader title={game.title} bannerImage={game.bannerImage} releaseDate={game.releaseDate} ctas={game.ctas} />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const game = getGameBySlug(params.slug);

  if (!game) {
    return notFound();
  }

  const title = `${game.title} | DVDA Games`;

  return {
    openGraph: {
      title,
      images: [game.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const games = getAllGames();

  return games.map((game) => ({
    slug: game.slug,
  }));
}
