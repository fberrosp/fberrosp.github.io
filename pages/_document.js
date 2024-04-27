import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-dark dark:text-light transition-all duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
