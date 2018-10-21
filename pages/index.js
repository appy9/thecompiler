import {Flex, Box} from '@rebass/grid';
import {request} from 'graphql-request';
import _get from 'lodash/get';
import getConfig from 'next/config';
import React, {Component} from 'react';

import {Container} from '../components/Global/styles';
import Header from '../components/Header';
import Meta from '../components/Meta';
import PostList from '../components/PostList';
import SiteLinks from '../components/SiteLinks';
import Trending from '../components/Trending';
import {PAGE_AUTHOR, PAGE_TAG} from '../utils/constants';

const {
  publicRuntimeConfig: {apiUrl}
} = getConfig();

const listSize = 20;

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
    let pageFilter = '';

    if (hasPageQuery) {
      switch (pageType) {
        case PAGE_AUTHOR:
          pageFilter = `author: $pageId`;
          break;
        case PAGE_TAG:
          pageFilter = `tag: $pageId`;
          break;
        default:
      }
    }

    const queryArgs = hasPageQuery ? ` $pageId: String!` : '';
    const postsArgs = hasPageQuery ? pageFilter : '';

    return `
      query indexQuery($offset: Int! ${queryArgs}) {
        posts(limit: ${listSize} offset: $offset ${postsArgs}) {
          count
          posts {
            authors
            date_published
            tags
            title
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
    const {author, pageType, tag} = this.props;
    const {count, loading, loadingError, offset, posts} = this.state;

    return (
      <>
        <Meta author={author} pageType={pageType} tag={tag} />
        <Header />
        <Container>
          <Flex>
            <Box mx="auto" width={2 / 3} px={2}>
              <PostList
                handlePaginate={this.handlePaginate}
                items={posts}
                loading={loading}
                loadingError={loadingError}
                showLoadMore={offset < count}
              />
            </Box>
            <Box mx="auto" width={1 / 3} px={2}>
              <Trending />
              <SiteLinks />
            </Box>
          </Flex>
        </Container>
      </>
    );
  }
}
