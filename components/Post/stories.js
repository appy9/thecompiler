import React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';

import Post from './index';

const post = {
  authors: ['andrew-clark'],
  date_added: '2018-09-10T15:02:25.941Z',
  date_published: '2018-05-28T00:00:00',
  tags: ['javascript', 'react-suspense'],
  title: 'React Suspense',
  type: 'post',
  url: '#'
};

storiesOf('Post', module).add('Default', () => <Post {...post} />);
