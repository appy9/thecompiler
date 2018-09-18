import App, {Container} from 'next/app';
import Error from 'next/error';
import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import {globalCSS, theme} from '../components/Global/styles';

const GlobalStyle = createGlobalStyle`${globalCSS}`;

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
