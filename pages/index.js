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
import {PAGE_AUTHOR, PAGE_LANG, PAGE_TAG} from '../utils/constants';

const {
  publicRuntimeConfig: {apiUrl}
} = getConfig();

const listSize = 4;

export default class Index extends Component {
  static async getInitialProps(ctx) {
    const pageId =
      ctx.req && ctx.req.params && ctx.req.params.id ? ctx.req.params.id : '';
    const pageType = ctx.query && ctx.query.page;
    const QLQuery = this.getQuery({pageId, pageType});
    const variables = {offset: 0, pageId};
    const qlResponse = await request(apiUrl, QLQuery, variables)
      .then(data => data)
      .catch(error => {
        console.log('error', error);

        return {initialError: true};
      });

    return {...qlResponse, pageId, pageType};
  }

  static getQuery({pageId, pageType}) {
    const hasPageQuery = pageType && pageId;
    let pageQuery = '';

    if (hasPageQuery) {
      switch (pageType) {
        case PAGE_AUTHOR:
          pageQuery = `
            author(id: $pageId) {
              id
              name
              url
            }
          `;
          break;
        case PAGE_LANG:
          pageQuery = `
            language(id: $pageId) {
              id
              name
            }
          `;
          break;
        case PAGE_TAG:
          pageQuery = `
            tag(id: $pageId) {
              id
              name
              url
            }
          `;
          break;
        default:
      }
    }
    const otherArgs = hasPageQuery ? ` $pageId: String!` : '';

    return `
      query indexQuery($offset: Int! ${otherArgs}) {
        ${pageQuery || ''}
        posts(limit: ${listSize} offset: $offset) {
          count
          posts {
            authors {
              id
              name
            }
            tags {
              id
              name
            }
            date_added
            date_published
            languages {
              id
              name
            }
            title
            type
            url
          }
        }
      }
    `;
  }

  constructor(props) {
    super(props);

    const {count, posts = {}} = props.posts || {};

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

      const {pageId, pageType} = this.props;
      const QLQuery = Index.getQuery({pageId, pageType});
      const variables = {offset: this.state.offset, pageId};
      const qlResponse = await request(apiUrl, QLQuery, variables)
        .then(data => data)
        .catch(error => {
          console.log('error', error);

          return {error: true};
        });
      const posts = _get(qlResponse, 'posts.posts', []);

      if (qlResponse.error) {
        this.setState({loading: false, loadingError: true});
      } else {
        this.setState(state => ({
          loading: false,
          offset: state.offset + posts.length,
          posts: [...state.posts, ...posts]
        }));
      }
    }
  }

  render() {
    const {author, language, pageType, tag, user} = this.props;
    const {count, loading, loadingError, offset, posts} = this.state;

    return (
      <Fragment>
        <Head>
          <title>thecompiler</title>
        </Head>
        <Header handleLogout={this.logOut} user={user} />
        <GSC.Flex>
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
            <CategoryHeader
              author={author}
              language={language}
              pageType={pageType}
              tag={tag}
            />
            <SideLinks />
          </GSC.OneThirdColumn>
        </GSC.Flex>
      </Fragment>
    );
  }
}
