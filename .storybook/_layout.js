import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';

import {globalCSS, theme} from '../components/Global/styles';

const GlobalStyle = createGlobalStyle`${globalCSS}`;

const Div = styled.div`
  padding: 24px;
`;

const Layout = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Div>{storyFn()}</Div>
    </>
  </ThemeProvider>
);

export default Layout;
