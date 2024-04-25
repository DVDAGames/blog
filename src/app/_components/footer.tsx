import Container from "@/app/_components/container";
import Player from "@/app/_components/player";

import trackList from "@/app/_components/player/tracks";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:w-1/2">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
              Get in Touch
            </h3>
            <div className="">hello [at] dvdagames.com</div>
          </div>
          <div className="flex flex-col lg:w-1/2 items-end">
            <ul className="flex flex-row">
              <li className="mr-3">
                <a href={`https://github.com/dvdagames/`}>GitHub</a>
              </li>
              <li>
                <a href={`https://twitter.com/dvdagames`}>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <section className="fixed flex bottom-0 right-0 justify-start items-center w-full min-h-[64px]">
        <Player tracks={trackList} loop />
      </section>
    </footer>
  );
}

export default Footer;
