import Container from "@/app/_components/container";

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
    </footer>
  );
}

export default Footer;
