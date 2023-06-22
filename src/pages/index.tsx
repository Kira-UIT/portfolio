import {
  AboutMe,
  Banner,
  ContactMe,
  Header,
  Portfolio,
  Project,
} from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="px-4 md:px-6 lg:px-10">
      <Header />
      <main
        className={`z-10 mt-16 flex min-h-screen flex-col ${inter.className}`}
      >
        <Banner />
        <AboutMe />
        <Portfolio />
        <Project />
        <ContactMe />
      </main>
    </div>
  );
}
