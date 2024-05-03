import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGames } from "../../lib/api";
import Container from "../_components/container";
import Header from "../_components/header";
import { GamePreview } from "../_components/game-preview";

export default async function Post() {
  const games = getAllGames();

  if (!games) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight mb-[20px]">Our Games</h1>
        <p className="text-md mb-[10px]">What we're building and can't wait for you to play.</p>
        <article className="mb-32">
          {games.map((game) => (
            <GamePreview
              key={game.slug}
              title={game.title}
              coverImage={game.coverImage}
              releaseDate={game.releaseDate}
              ctas={game.ctas}
              excerpt={game.excerpt}
              slug={game.slug}
              price={game.price}
            />
          ))}
        </article>
      </Container>
    </main>
  );
}

export function generateMetadata(): Metadata {
  const games = getAllGames();

  if (!games) {
    return notFound();
  }

  const title = `Our Games | DVDA Games`;

  return {
    openGraph: {
      title,
      images: games.map((game) => game.ogImage.url),
    },
  };
}
