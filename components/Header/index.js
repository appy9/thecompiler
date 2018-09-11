import React from 'react';

import * as SC from './styles';
import Typeahead from './Typeahead';
import * as GSC from '../Global.styles';

const Header = ({handleLogout, user}) => (
  <SC.Header>
    <GSC.Container>
      <a href="/">
        <p>the compiler</p>
      </a>
      <Typeahead />
    </GSC.Container>
  </SC.Header>
);

Header.propTypes = {};

export default Header;
