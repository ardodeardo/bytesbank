import "@/styles/globals.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
