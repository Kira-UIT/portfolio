import {
  AboutMe,
  Hero,
  ContactMe,
  Layout,
  Portfolio,
  Project,
  ScrollToTop,
} from "@/components";
import Head from "next/head";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kira | Fullstack Developer</title>
      </Head>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Project />
      <ContactMe />
      <ScrollToTop />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
