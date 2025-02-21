import Container from "@/app/_components/container";
import ClientOnly from "@/app/_components/client-only";
import Player from "@/app/_components/player";

import trackList from "@/app/_components/player/tracks";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col">
          <div className="flex flow-row w-full justify-between lg:text-left mb-10 lg:mb-0">
            <div className="flex flex-col lg:w-1/2">
              <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight">
                Get in Touch
              </h3>
              <div className="">hello [at] dvdagames.com</div>
            </div>
            <div className="flex flex-col lg:w-1/2 items-end">
              <ul className="flex flex-row">
                <li className="mr-3">
                  <a href={`https://github.com/dvdagames/`}>GitHub</a>
                </li>
                <li className="mr-3">
                  <a href={`https://twitter.com/dvdagames`}>Twitter</a>
                </li>
                <li>
                  <a href={`https://dvdagames.itch.io`}>Itch.io</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex flex-col w-full ml-embedded mt-10 mb-10"
            data-form="Ac69hd"
          ></div>
        </div>
      </Container>
      <section className="fixed flex bottom-0 right-0 justify-start items-center w-full min-h-[64px]">
        <ClientOnly>
          <Player tracks={trackList} loop showSpectrumAnalyzer />
        </ClientOnly>
      </section>
    </footer>
  );
}

export default Footer;
