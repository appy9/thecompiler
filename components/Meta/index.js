import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import {PAGE_AUTHOR, PAGE_TAG} from '../../utils/constants';

const Meta = props => {
  const {author, pageType, tag} = props;

  switch (pageType) {
    case PAGE_AUTHOR:
      break;
    case PAGE_TAG:
      break;
    default:
  }

  return (
    <Head>
      <title>thecompiler</title>
    </Head>
  );
};

Meta.propTypes = {
  author: PropTypes.object,
  pageType: PropTypes.string,
  tag: PropTypes.object
};

export default Meta;
