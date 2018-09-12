import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import * as GSC from '../Global.styles';
import {PAGE_AUTHOR, PAGE_LANG, PAGE_TAG} from '../../utils/constants';

const SideHeader = props => {
  const {author, language, pageType, tag} = props;

  if (pageType) {
    const {name, url} = {
      [PAGE_AUTHOR]: author,
      [PAGE_LANG]: language,
      [PAGE_TAG]: tag
    }[pageType];

    return (
      <GSC.Card>
        <Link href="/">
          <a>
            <h2>the compiler</h2>
          </a>
        </Link>
        <p>{name}</p>
        {url && (
          <a href={url} rel="noopener noreferrer" target="_blank">
            <p>website</p>
          </a>
        )}
      </GSC.Card>
    );
  }

  return (
    <GSC.Card>
      <h2>the compiler</h2>
    </GSC.Card>
  );
};

SideHeader.propTypes = {
  author: PropTypes.object,
  language: PropTypes.object,
  pageType: PropTypes.string,
  tag: PropTypes.object
};

export default SideHeader;
