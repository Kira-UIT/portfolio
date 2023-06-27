import { Footer, Header, ModeSettings } from "@/components";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = (props) => {
  const { children } = props;
  const [preset, setPreset] = useLocalStorage<string>("preset", "");

  return (
    <div className={`${inter.className} ${preset ? preset : "preset-green"}`}>
      <Header />
      <ModeSettings setPreset={setPreset} />
      <main className={`z-0 mx-auto mt-16 w-full px-[10%]`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
