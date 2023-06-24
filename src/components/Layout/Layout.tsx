import { Footer, Header, ModeSettings } from "@/components";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <ModeSettings />
      <main className={`z-0 mx-auto mt-16 w-full px-[10%] ${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
