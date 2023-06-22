import Link from "next/link";
import { FC } from "react";
import { Logo } from "@/components";

const Header: FC = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center px-[10%] backdrop-blur-md">
      <Link href="/" className="group text-3xl font-bold">
        <Logo />
      </Link>
      <nav className="flex-grow">
        <ul className="flex items-center justify-end font-semibold">
          <li className="navigate-element">
            <Link href="/">Home</Link>
          </li>
          <li className="navigate-element">
            <Link href="#about-me">About me</Link>
          </li>
          <li className="navigate-element">
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li className="navigate-element">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="navigate-element">
            <Link href="#contact-me">Contact me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
