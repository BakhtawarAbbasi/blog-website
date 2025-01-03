import Link from "next/link";
import SocialMedia from "./SocialMedia";


export default function Navbar() {
  return (
    <header className=" flex items-center justify-between xs:flex-row py-2 border-b-2 border-text-gray-700 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className=" flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link href={"/"} className="text-3xl text-dark dark:text-light">
          BA<span className="text-3xl text-accentDarkPrimary">BLOG</span>
        </Link>
        <SocialMedia />
      </nav>

      
    </header>
  );
}
