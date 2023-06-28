import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex h-fit flex-wrap items-center justify-between gap-4 border-t sm:px-[10%] py-2 dark:bg-neutral-800 px-4">
      <small>Copyright &copy; 2023 by Kira | All rights reserved.</small>
      <address className="flex flex-col text-sm">
        <Link href="tel:+84869385565" className="hover:text-primary">
          +84 869 385 565
        </Link>
        <Link
          href="mailto:thiennguyen.fsd@gmail.com"
          className="hover:text-primary"
        >
          thiennguyen.fsd@gmail.com
        </Link>
      </address>
    </footer>
  );
};

export default Footer;
