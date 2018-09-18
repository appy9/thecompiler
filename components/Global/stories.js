import React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';

const Color = styled.div`
  margin: 10px;
  display: inline-block;

  p {
    margin-bottom: 10px;
  }

  div {
    height: 100px;
    width: 100px;
    background: ${props => props.theme[props.color]};
  }
`;

const getColor = color => (
  <Color color={color}>
    <p>{color}</p>
    <div />
  </Color>
);

const ThemeColors = () => (
  <div>
    <h2>Theme</h2>
    <div>
      {getColor('White300')}
      {getColor('Black300')}
      {getColor('Background')}
    </div>
    <div>
      {getColor('Red100')}
      {getColor('Red200')}
      {getColor('Red300')}
      {getColor('Red400')}
      {getColor('Red500')}
    </div>
    <div>
      {getColor('Orange100')}
      {getColor('Orange200')}
      {getColor('Orange300')}
      {getColor('Orange400')}
      {getColor('Orange500')}
    </div>
    <div>
      {getColor('Yellow100')}
      {getColor('Yellow200')}
      {getColor('Yellow300')}
      {getColor('Yellow400')}
      {getColor('Yellow500')}
    </div>
    <div>
      {getColor('Green100')}
      {getColor('Green200')}
      {getColor('Green300')}
      {getColor('Green400')}
      {getColor('Green500')}
    </div>
    <div>
      {getColor('Blue100')}
      {getColor('Blue200')}
      {getColor('Blue300')}
      {getColor('Blue400')}
      {getColor('Blue500')}
    </div>
    <div>
      {getColor('Purple100')}
      {getColor('Purple200')}
      {getColor('Purple300')}
      {getColor('Purple400')}
      {getColor('Purple500')}
    </div>
    <div>
      {getColor('Teal100')}
      {getColor('Teal200')}
      {getColor('Teal300')}
      {getColor('Teal400')}
      {getColor('Teal500')}
    </div>
    <div>
      {getColor('Grey100')}
      {getColor('Grey200')}
      {getColor('Grey300')}
      {getColor('Grey400')}
      {getColor('Grey500')}
      {getColor('Grey600')}
      {getColor('Grey700')}
      {getColor('Grey800')}
      {getColor('Grey900')}
    </div>
  </div>
);

storiesOf('Global', module).add('Theme Colors', () => <ThemeColors />);
