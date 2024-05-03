import Link from "next/link";

export interface NavProps {
  includeHome?: boolean;
}

export function Nav({ includeHome = true }: NavProps): React.ReactElement {
  return (
    <nav className="flex flex-row mb-[20px]">
      <ul className="flex flex-row">
        {includeHome && (
          <li>
            <Link className="mr-[20px]" href="/">
              DVDA Games
            </Link>
          </li>
        )}
        <li className="mr-[20px]">
          <Link href="/games">Games</Link>
        </li>
        <li className="mr-[20px]">Projects</li>
        <li className="">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
