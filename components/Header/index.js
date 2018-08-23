import PropTypes from 'prop-types';
import React from 'react';

import * as SC from './styles';

const Header = ({handleLogout, user}) => (
  <SC.Header>
    <p>the compiler</p>
  </SC.Header>
);

Header.propTypes = {};

export default Header;
