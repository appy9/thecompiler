import Error from 'next/error';
import React from 'react';

export default class Page extends React.Component {
  static getInitialProps({req, res, err}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    const url = req && req.url ? req.url : '';

    console.error(`User requested non-existant page: ${url}`);

    return {statusCode};
  }

  render() {
    return <Error statusCode={this.props.statusCode} />;
  }
}
