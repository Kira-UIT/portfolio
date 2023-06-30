import { Loading } from "@/components";
import useLocalStorage from "@/hooks/useLocalStorage";
import "@/styles/globals.css";
import { NextPage } from "next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

Router.events.on("routeChangeError", (err, url, { shallow }) => {
  console.log("Navigating to: " + "url: " + url, { cancelled: err.cancelled });
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [loading, setLoading] = useState(true);
  const [preset] = useLocalStorage<string>("preset", "");

  useEffect(() => {
    document.documentElement.setAttribute("preset-color", preset);
  }, [preset]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
