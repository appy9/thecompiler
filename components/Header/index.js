import Link from 'next/link';
import React from 'react';

import * as SC from './styles';
import Typeahead from './Typeahead';

const Header = ({handleLogout, user}) => (
  <SC.Header>
    <Link href="/">
      <a>
        <p>the compiler</p>
      </a>
    </Link>
    <Typeahead />
  </SC.Header>
);

Header.propTypes = {};

export default Header;
