import {post} from 'axios';
import {request} from 'graphql-request';
import App, {Container} from 'next/app';
import getConfig from 'next/config';
import Error from 'next/error';
import React from 'react';

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
        <Component {...pageProps} />
      </Container>
    );
  }
}
