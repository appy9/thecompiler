/* eslint-disable import/first */

/**
 * Set the next config first or youll have problems
 * with files trying to access it within storybooks
 */
import {setConfig} from 'next/config';
import {publicRuntimeConfig} from '../next.config';

setConfig({publicRuntimeConfig});

import {addDecorator, configure} from '@storybook/react';

import Layout from './_layout';

addDecorator(Layout);

const req = require.context('../stories');
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
