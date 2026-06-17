import Link from "next/link";
import Avatar from "./avatar";
import Image from "next/image";

export interface NavProps {
  includeHome?: boolean;
}

export function Nav({ includeHome = true }: NavProps): React.ReactElement {
  return (
    <nav className="flex flex-row w-full items-center mt-[20px] mb-[20px]">
      <ul className="flex flex-row w-full items-center justify-end">
        {includeHome && (
          <li className="mr-auto">
            <Link className="mr-[20px] flex flex-row items-center h-[64px]" href="/">
              <img src="/assets/blog/authors/dvda.png" alt="" className="h-full" />
              <img src="/assets/images/dvda-mark.png" alt="" className="h-full" />
              <span className="sr-only">DVDA Games</span>
            </Link>
          </li>
        )}
        <li className="mr-[20px]">
          <Link href="/games">Games</Link>
        </li>
        <li className="mr-[20px]">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
