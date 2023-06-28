import { Logo } from "@/components";
import { navigation } from "@/constants/navigation";
import { CloseIcon, MenuIcon } from "@/utils/medias";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-between px-4 backdrop-blur-md sm:px-[10%]">
      <Link href="/" className="group text-3xl font-bold" replace>
        <Logo />
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-end font-semibold">
          {navigation.map((nav) => (
            <li
              key={nav.id}
              className={`navigate-element relative px-4 transition-colors duration-300 after:absolute after:-bottom-[8%] after:left-1/2 after:h-[3px] after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-1/2 ${
                router.asPath === nav.path
                  ? " text-primary after:w-1/2"
                  : "after:w-0"
              }`}
            >
              <Link href={nav.path}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="cursor-pointer transition-colors duration-300 hover:text-primary sm:hidden"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </div>
      <div
        className={`fixed top-0 ${
          isOpen ? "left-0" : "left-full"
        } h-screen w-screen bg-white duration-300`}
      >
        <div
          className="z-50 mr-4 mt-4 flex cursor-pointer items-center justify-end text-black hover:text-primary"
          onClick={toggleMenu}
        >
          <CloseIcon />
        </div>
        <nav className="text-black">
          <ul className="font-semibold">
            {navigation.map((nav) => (
              <li key={nav.id} onClick={toggleMenu}>
                <Link
                  href={nav.path}
                  className="block p-2 text-center hover:bg-gray-100 hover:text-primary"
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
