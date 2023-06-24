import { Logo } from "@/components";
import { navigation } from "@/constants/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-between px-[10%] backdrop-blur-md">
      <Link href="/" className="group text-3xl font-bold" replace>
        <Logo />
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-end font-semibold">
          {navigation.map((nav) => (
            <li
              key={nav.id}
              className={`navigate-element ${
                router.asPath === nav.path ? "active" : ""
              }`}
            >
              <Link href={nav.path}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="cursor-pointer transition-colors duration-300 hover:text-green-500 sm:hidden"
        onClick={toggleMenu}
      >
        <svg
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 18h13v-2H3v2Zm0-5h10v-2H3v2Zm0-7v2h13V6H3Zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59Z"></path>
        </svg>
      </div>
      <div
        className={`fixed top-0 ${
          isOpen ? "left-0" : "left-full"
        } h-screen w-screen bg-white duration-300`}
      >
        <div
          className="z-50 mr-4 mt-4 flex cursor-pointer items-center justify-end text-black hover:text-green-500"
          onClick={toggleMenu}
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
          </svg>
        </div>
        <nav className="text-black">
          <ul className="font-semibold">
            {navigation.map((nav) => (
              <li key={nav.id} onClick={toggleMenu}>
                <Link
                  href={nav.path}
                  className="block p-2 text-center hover:bg-gray-100 hover:text-green-500"
                  replace
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
