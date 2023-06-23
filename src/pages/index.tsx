import {
  AboutMe,
  Banner,
  ContactMe,
  Footer,
  Header,
  Portfolio,
  Project,
  ScrollToTop,
} from "@/components";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kira | Fullstack Developer</title>
      </Head>
      <main className={`z-0 mx-auto mt-16 w-full px-[10%] ${inter.className}`}>
        <Header />
        <Banner />
        <AboutMe />
        <Portfolio />
        <Project />
        <ContactMe />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
