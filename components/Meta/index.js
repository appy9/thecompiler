import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import {PAGE_AUTHOR, PAGE_TAG} from '../../utils/constants';

const Meta = props => {
  const {author, pageType, tag} = props;
  let title = 'the compiler';

  switch (pageType) {
    case PAGE_AUTHOR:
      title = `${author.name} | ${title}`;
      break;
    case PAGE_TAG:
      title = `${tag.name} | ${title}`;
      break;
    default:
  }

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="A community maintained list of every programming resource available. From articles to videos and podcasts this is an opensource and robust list of content." />
    </Head>
  );
};

Meta.propTypes = {
  author: PropTypes.object,
  pageType: PropTypes.string,
  tag: PropTypes.object
};

export default Meta;
