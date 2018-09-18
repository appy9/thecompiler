import React from 'react';

import * as SC from './styles';

const SiteLinks = () => (
  <SC.Div>
    <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
      <p>Twitter</p>
    </a>
    <a
      href="https://github.com/onthecompiler/thecompiler"
      rel="noopener noreferrer"
      target="_blank"
    >
      <p>Github</p>
    </a>
    <a
      href="https://github.com/onthecompiler/code-of-conduct"
      rel="noopener noreferrer"
      target="_blank"
    >
      <p>Code of Conduct</p>
    </a>
  </SC.Div>
);

export default SiteLinks;
