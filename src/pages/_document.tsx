import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href="/assets/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/assets/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="The best Game Store in the world!"
          />
        </Head>
        <title>Won Games</title>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
