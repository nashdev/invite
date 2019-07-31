import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="_X-CaJkIX0xzenu0IIHZlaCs1uJ6RhJCk-MuPGNE6ag"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
