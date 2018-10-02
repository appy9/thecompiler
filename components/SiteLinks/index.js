import React from 'react';

import {Div} from './styles';

const SiteLinks = () => (
  <Div>
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
    <a href="/#" rel="noopener noreferrer" target="_blank">
      <p>Report or Flag</p>
    </a>
    <a href="/#" rel="noopener noreferrer" target="_blank">
      <p>Contact</p>
    </a>
  </Div>
);

export default SiteLinks;
