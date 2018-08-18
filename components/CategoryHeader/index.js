import PropTypes from 'prop-types';
import React from 'react';

import * as GSC from '../Global.styles';

const CategoryHeader = props => {
  const {type} = props;

  if (type) {
    return (
      <GSC.Card>
        <h1>{type}</h1>
      </GSC.Card>
    );
  }

  return null;
};

CategoryHeader.propTypes = {
  type: PropTypes.string
};

export default CategoryHeader;
