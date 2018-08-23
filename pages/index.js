import {request} from 'graphql-request';
import getConfig from 'next/config';
import Head from 'next/head';
import React, {Component, Fragment} from 'react';

import ArticleList from '../components/ArticleList';
import CategoryHeader from '../components/CategoryHeader';
import * as GSC from '../components/Global.styles';
import Header from '../components/Header';
import SideLinks from '../components/SideLinks';
import UserInterests from '../components/UserInterests';

const {
  publicRuntimeConfig: {apiUrl}
} = getConfig();

export default class Index extends Component {
  static async getInitialProps({query, res, token}) {
    console.log('Index getInitialProps', token);

    let items = new Array(15).fill('').map((item, index) => ({_id: index}));
    const pageType = query && query.page;
    const QLQuery = `
      query indexQuery($token: String!) {
        user(token: $token) {
          avatar_url
          id
          likes
          login
        }
        posts {
          posts {
            stuff
          }
        }
        version
      }
    `;
    const variables = {token};
    const qlRes = await request(apiUrl, QLQuery, variables)
      .then(data => data)
      .catch(error => {
        console.log('error', error);

        return {initialError: true};
      });

    console.log('qlRes', qlRes);

    return {...qlRes, items, pageType};
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loadingError: false
    };

    this.handlePaginate = this.handlePaginate.bind(this);
  }

  handlePaginate() {
    if (!this.state.loading) {
      this.setState({loading: true, loadingError: false});

      setTimeout(() => {
        this.setState({loading: false});
      }, 2000);
    }
  }

  render() {
    const {items, pageType, user} = this.props;
    const {loading, loadingError} = this.state;

    return (
      <Fragment>
        <Head>
          <title>
            {pageType ? `${pageType} | ` : ''}
            thecompiler
          </title>
        </Head>
        <Header handleLogout={this.logOut} user={user} />
        <GSC.Flex>
          <Fragment>
            <GSC.TwoThirdColumn>
              <ArticleList
                handlePaginate={this.handlePaginate}
                items={items}
                loading={loading}
                loadingError={loadingError}
              />
            </GSC.TwoThirdColumn>
            <GSC.OneThirdColumn>
              <CategoryHeader type={pageType} />
              <UserInterests />
              <SideLinks />
            </GSC.OneThirdColumn>
          </Fragment>
        </GSC.Flex>
      </Fragment>
    );
  }
}
