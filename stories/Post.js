import React from 'react';
import {storiesOf} from '@storybook/react';

import Post from '../components/Post';

const post = {
  authors: [{id: 'andrew-clark', name: 'Andrew Clark'}],
  date_published: '2018-05-28T00:00:00',
  tags: [
    {id: 'javascript', name: 'Javascript'},
    {id: 'react-suspense', name: 'React Suspense'}
  ],
  title: 'React Suspense',
  url: '#'
};

storiesOf('Post', module).add('Default', () => <Post {...post} />);
