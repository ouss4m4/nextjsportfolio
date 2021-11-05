import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Merriweather:wght@400;700&family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-dark-500 text-whitetxt">
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}
