import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head>
        {/* <title>BytesBank</title> */}
      </Head>
      <body className="bg-gray-50 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
