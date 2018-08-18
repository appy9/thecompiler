import React from 'react';
import {render} from 'react-testing-library';

it('renders without crashing', () => {
  const Component = () => <p>Hello World</p>;
  const {debug} = render(<Component />);

  debug();
});
