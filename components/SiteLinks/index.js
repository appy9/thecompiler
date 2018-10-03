import React from 'react';

import {Div} from './styles';

const SiteLinks = () => (
  <Div>
    <a
      href="https://twitter.com/onthecompiler"
      rel="noopener noreferrer"
      target="_blank"
    >
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
      href="https://github.com/onthecompiler/thecompiler/CODE_OF_CONDUCT.md"
      rel="noopener noreferrer"
      target="_blank"
    >
      <p>Code of Conduct</p>
    </a>
    <a
      href="https://github.com/onthecompiler/thecompiler/issues/new?template=flag-information.md"
      rel="noopener noreferrer"
      target="_blank"
    >
      <p>Report or Flag</p>
    </a>
    <a href="mailto:onthecompiler@gmail.com">
      <p>Contact</p>
    </a>
  </Div>
);

export default SiteLinks;
