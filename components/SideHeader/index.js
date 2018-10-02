import PropTypes from 'prop-types';
import React from 'react';

import {Card} from '../Global/styles';
import {PAGE_AUTHOR, PAGE_TAG} from '../../utils/constants';

const SideHeader = props => {
  const {author, pageType, tag} = props;

  if (pageType) {
    const {name, url} = {
      [PAGE_AUTHOR]: author,
      [PAGE_TAG]: tag
    }[pageType];

    return (
      <Card>
        {url ? (
          <a href={url} rel="noopener noreferrer" target="_blank">
            <p>{name}</p>
          </a>
        ) : (
          <p>{name}</p>
        )}
      </Card>
    );
  }

  return null;
};

SideHeader.propTypes = {
  author: PropTypes.object,
  pageType: PropTypes.string,
  tag: PropTypes.object
};

export default SideHeader;
