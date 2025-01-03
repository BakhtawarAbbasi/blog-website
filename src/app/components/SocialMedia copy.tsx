
import Link from "next/link";

export default function SocialMedia() {
  return (

    // TODO: If you activate 3 or more social icons, make sure to update the Navbar styling accordingly.

    // Social Icons
    <nav className="flex gap-2 text-accentDarkPrimary font-bold">
      <Link href="/">
          Home
      </Link>
      <Link href="/about">
        About
      </Link> 
       <Link href="/contact">
        Contact
      </Link> 
       
    </nav>
  );
}
