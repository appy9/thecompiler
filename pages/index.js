import {request} from 'graphql-request';
import _get from 'lodash/get';
import getConfig from 'next/config';
import Head from 'next/head';
import React, {Component, Fragment} from 'react';

import CategoryHeader from '../components/CategoryHeader';
import * as GSC from '../components/Global.styles';
import Header from '../components/Header';
import PostList from '../components/PostList';
import SideLinks from '../components/SideLinks';
import UserInterests from '../components/UserInterests';

const {
  publicRuntimeConfig: {apiUrl}
} = getConfig();

const QLQuery = `
  query indexQuery($offset: Int!) {
    allPosts(limit: 20 offset: $offset) {
      count
      posts {
        authors
        categories
        date_added
        date_published
        languages
        title
        type
        url
      }
    }
    version
  }
`;

export default class Index extends Component {
  static async getInitialProps({query, res}) {
    const pageType = query && query.page;

    const variables = {offset: 0};
    const qlResponse = await request(apiUrl, QLQuery, variables)
      .then(data => data)
      .catch(error => {
        console.log('error', error);

        return {initialError: true};
      });

    return {...qlResponse, pageType};
  }

  constructor(props) {
    super(props);

    const {count, posts} = props.allPosts;

    this.state = {
      count,
      loading: false,
      loadingError: false,
      offset: posts.length,
      posts
    };

    this.handlePaginate = this.handlePaginate.bind(this);
  }

  async handlePaginate() {
    if (!this.state.loading && this.state.offset < this.state.count) {
      this.setState({loading: true, loadingError: false});

      const variables = {offset: this.state.offset};
      const qlResponse = await request(apiUrl, QLQuery, variables)
        .then(data => data)
        .catch(error => {
          console.log('error', error);

          return {error: true};
        });
      const posts = _get(qlResponse, 'allPosts.posts', []);

      if (qlResponse.error) {
        this.setState({loading: false, loadingError: true});
      } else {
        this.setState(state => ({
          loading: false,
          offset: state.offset + posts.length,
          posts: [...state.posts, posts]
        }));
      }
    }
  }

  render() {
    const {pageType, user} = this.props;
    const {count, loading, loadingError, offset, posts} = this.state;

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
              <PostList
                handlePaginate={this.handlePaginate}
                items={posts}
                loading={loading}
                loadingError={loadingError}
                showLoadMore={offset < count}
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
