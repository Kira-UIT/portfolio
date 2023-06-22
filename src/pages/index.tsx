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
      <Header />
      <main
        className={`z-10 mt-16 flex min-h-screen flex-col px-[10%] ${inter.className}`}
      >
        <Banner />
        <AboutMe />
        <Portfolio />
        <Project />
        <ContactMe />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
