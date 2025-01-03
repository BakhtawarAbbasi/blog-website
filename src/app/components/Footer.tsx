import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full bg-black py-4 mt-14">
      <section className="flex flex-col md:flex-row">
       
      </section>
      <section className=" px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">

      <div className="flex justify-center items-center gap-x-4 text-sm text-light">
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/github-icon.png"
              alt="GitHub"
              width={24}
              height={24}
              className="hover:opacity-80"
            />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin-icon.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:opacity-80"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/instagrams.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-80"
            />
          </Link>
          
        </div>
      
        <div>
          <p className="text-xs text-light">
            © 2024 <span className="text-light font-bold">&nbsp;BA</span>
            <span className="text-accentDarkPrimary font-bold">
              BLOG&nbsp;
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </section>

    </footer>
  );
}
