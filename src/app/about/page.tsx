import Link from "next/link";

import Header from "@/app/_components/header";
import Container from "@/app/_components/container";
import { PostTitle } from "@/app/_components/post-title";

export default async function About() {
  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostTitle>About</PostTitle>
          <p>
            Dead Villager Dead Adventurer Games is an indie game studio and an
            open source tool developer formed as a labor of love by{" "}
            <a href="https://github.com/ericrallen/">Eric Allen</a>, a developer
            advocate, software developer, and Large Language Model (LLM)
            researcher pursuing a life long dream of making video games.
          </p>
          <p className="mt-4">
            DVDA Games has been a side project hacking on game{" "}
            <Link href="/projects">projects and open source tools</Link> to
            support gamers and other developers since 2016. In 2024, after
            taking a career break and working on a{" "}
            <a href="https://ldjam.com/events/ludum-dare/55/dark-ritual">
              Ludum Dare 55 Compo entry
            </a>
            , DVDA Games started development on its first game{" "}
            <Link href="/games/gravedigger-dark-ritual">
              Gravedigger: Dark Ritual
            </Link>
            , a retro-inspired adventure game.
          </p>
          <p className="mt-4">
            Later in 2024, we started working on a new game called{" "}
            <Link href="/games/line-of-sight">Line of Sight</Link>, a
            retro-inspired, isometric stealth game.
          </p>
          <p className="mt-4">Both games are still in development.</p>
        </article>
      </Container>
    </main>
  );
}
