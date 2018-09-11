import App, {Container} from 'next/app';
import Error from 'next/error';
import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import {theme} from '../components/Global.styles';

const GlobalStyle = createGlobalStyle`
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
    background: ${p => p.theme.background};
  }
`;

export default class NextApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  constructor(props) {
    super(props);

    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});

    console.error('componentDidCatch error');
    console.error(error);
    console.error('componentDidCatch info');
    console.error(info);
  }

  render() {
    const {Component, pageProps} = this.props;

    if (this.state.hasError) {
      return <Error />;
    }

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
