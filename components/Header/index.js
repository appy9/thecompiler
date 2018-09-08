import Link from 'next/link';
import React from 'react';

import * as SC from './styles';

const Header = ({handleLogout, user}) => (
  <SC.Header>
    <Link href="/">
      <a>
        <p>the compiler</p>
      </a>
    </Link>
  </SC.Header>
);

Header.propTypes = {};

export default Header;
