import _map from 'lodash/map';
import React from 'react';

import {Div} from './styles';
import {Card, SectionTitle} from '../Global/styles';
import trending from '../../data/trending.json';

const Trending = () => (
  <Card>
    <SectionTitle>Trending</SectionTitle>
    {_map(trending, (item, key) => (
      <Div key={key}>
        <a href={`/${item.type}/${item.id}`}>{item.name}</a>
      </Div>
    ))}
  </Card>
);

export default Trending;
