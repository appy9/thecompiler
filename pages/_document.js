/* eslint-disable react/react-in-jsx-scope */
import Document, {Head, Main, NextScript} from 'next/document';
import {css, injectGlobal, ServerStyleSheet} from 'styled-components';

injectGlobal`${css`
  * {
    vertical-align: baseline;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
  }

  *:focus {
    outline: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    line-height: 1.25;
    word-wrap: break-word;
    font-kerning: normal;
  }

  body {
    background: lightgrey;
  }
`}`;

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
