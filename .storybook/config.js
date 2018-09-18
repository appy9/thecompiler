import {addDecorator, configure} from '@storybook/react';
import {withThemes} from 'storybook-styled-components';

import {theme} from '../components/Global/styles';
import Layout from './_layout';

addDecorator(withThemes([theme]));
addDecorator(Layout);

// automatically import all files named stories.js
const req = require.context('../components', true, /stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
