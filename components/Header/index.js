import React from 'react';

import * as SC from './styles';
import Typeahead from './Typeahead';

const Header = ({handleLogout, user}) => (
  <SC.Header>
    <a href="/">
      <p>the compiler</p>
    </a>
    <Typeahead />
  </SC.Header>
);

Header.propTypes = {};

export default Header;
