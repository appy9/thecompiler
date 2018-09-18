import _ from 'lodash';
import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {globalCSS} from '../components/Global/styles';

const GlobalStyle = createGlobalStyle`${globalCSS}`;

const Div = styled.div`
  padding: 24px;
`;

const Layout = storyFn => (
  <>
    <GlobalStyle />
    <Div>{storyFn()}</Div>
  </>
);

export default Layout;
